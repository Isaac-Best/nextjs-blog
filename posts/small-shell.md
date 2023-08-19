---
title: 'Small Shell Implementation'
date: '2023-8-17'
image: small-shell.jpg
excerpt: In this post, I'll explain how I implemented a basic shell in C for a class assignment. The goal was to build a simple shell with basic features like handling multiple commands, I/O redirection, environment variable expansion, and managing foreground and background processes. 
isFeatured: true
---


Note: This is a rather quick explanation of my SMALLSH assignment, I'll update this later to be a beginer friendly tutorial including a why and how I reached the conclusions I did, what resources I used to get there and an explanation of the sytsem calls used. In the current state it's really just a highlight of some blog features like syntax highlighting.


A link to my github repo for your reference, this includes a testscript you can run, as well as a modularized version. [HERE](https://github.com/Isaac-Best/smallsh/tree/main)


**wordsplit()**

- Splits input line into word tokens
- Handles escapes, whitespace, comments
- Populates words array
```c
size_t wordsplit(char const *line) {
  size_t wlen = 0;
  size_t wind = 0;
  char const *c = line;
  
  for (;*c && isspace(*c); ++c); /* discard leading space */

  for (; *c;) { // iterate until NULL character 
    if (wind == MAX_WORDS) break;
    /* read a word */
    if (*c == '#') break;
    for (;*c && !isspace(*c); ++c) {
      if (*c == '\\') ++c;
      
      void *tmp = realloc(words[wind], sizeof **words * (wlen + 2));
      
      if (!tmp) err(1, "realloc 1");
      
      words[wind] = tmp;
      words[wind][wlen++] = *c; 
      words[wind][wlen] = '\0';
    }
    ++wind;
    wlen = 0;
    
    for (;*c && isspace(*c); ++c);
  }
  
  return wind;
  }
```

**param_scan()**

- Finds parameter tokens like $!, $$, ${var}
- Sets start and end pointers for each

**expand()**

- Expands parameters like $!, $$ with values
- Uses param_scan() and build_str()
- Returns expanded string

**build_str()** 

- Helper to build up expanded strings
- Appends strings/ranges to base string

**tokenize()**

- Parses I/O redirects, background ops  
- Builds argument array for execvp()

**check_builtin()**

- Checks for builtin commands like cd, exit
- Provides custom handling

**execute()**

- Forks and executes commands
- Manages I/O redirection
- Waits/handles child processes

**manage_background()**

- Checks and handles completed background processes

**reset_flags()**

- Resets I/O redirect flags for next loop



