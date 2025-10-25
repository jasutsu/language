# language {#custom-id}
English Learning App

<!-- ![Benjamin Bannekat](bannekat.png) -->

## More examples on Mermaid

```mermaid
---
title: hello word
---
flowchart LR
    A:::foo & B:::bar --> C:::foobar
    classDef foo stroke:#f00
    classDef bar stroke:#0f0
    classDef foobar stroke:#00f
```

```mermaid
graph LR
    id1(Start)-->id2(Stop)
    style id1 fill:#f9f,stroke:#333,stroke-width:4px
    style id2 fill:#bbf,stroke:#f66,stroke-width:2px,color:#fff,stroke-dasharray: 5 5
```

```mermaid
graph LR;
    subgraph one
    a --> b
    end
    subgraph two
    c --> d
    end
    a e1@--> c
    e1@{ curve: linear }
```

```mermaid
graph TD;
    A[Start] --> B{Is it?}
    B -- Yes --> C[OK]
    C --> D[Rethink]
    D --> B
    B -- No ----> E[End]
```

```mermaid
graph LR;
    A o--o B
    B <--> C
    C x--x D
```

```mermaid
graph TD
    A & B --> C & D
    D e1@==> E
    e1@{ animate: true }
```

```mermaid
graph TD
    A@{ shape: text, label: "This is a text block" }
    A --> B(Preview)
    B --- C{decide}
    C --> D[Keep]
    C ==> E[Edit Definition]
    E ---|Text between link| B
    D ~~~ F[Save Image and Code]
    F --> B
```

```mermaid
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : getName()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
```

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop HealthCheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!

```

```mermaid
graph LR;
    1 --> 2
    2 --> 3
    3 --> 4
    4 --> 5
    5 --> 6
    6 --> 7
    7 --> 8
    8 --> 9
    9 --> 10
    10 --> 11
    11 --> 12
    12 --> 13
```

```mermaid
    graph TD;
    1 --> 2
    2 --> 3
    3 --> 4
    4 --> 5
    5 --> 6
    6 --> 7
    7 --> 8
    8 --> 9
    9 --> 10
    10 --> 11
    11 --> 12
    12 --> 13
```

```mermaid
graph TD;
    A[Player enters in the bar]
    B[Player drinks]
    C[Player fights]
    D[Player exits the bar]

    A --> B
    A --> C
    B --> D
    C --> D
```

```mermaid
graph LR;
    id[Some text in the box]
    B[hello]

    id --> B
    C --> B
```

***

```mermaid
graph LR;
    A --> B
    C --> B
```

```mermaid
graph TD;
    A --> B
    C --> B
```

```mermaid
graph TD;
    Player_Enters --> Player_Drinks;
    Player_Enters --> Player_Fights;
    Player_Fights --> Player_Exits;
    Player_Drinks --> Player_Exits;
```

## Advanced title here
==Highlighted Text==  
~~Struck Text~~

| col1 | col2 | co3 |
|-|-|-|
| 1 | john | male |
| 2 | mike | male |
| 3 | vanessa | female |

- [x] task1
- [ ] task2
- [x] task3
- [x] task4

Here[^1] is a statement.[^2]
Here[^3] is a statement.[^4]

[^1]: This is the footnote.
[^2]: This is this another footnote.
[^3]: This is this another footnote.
[^4]: This is this another footnote.

**Term**  
Definition of the term

**Another Term**  
The definition for the other term

some [id](#language-custom-id)
head to advanced [id](#advanced-title-here)

:emoji:  
:rocket:  
:smile:  
:sleeping:  

## Code

I strongly recommend against using any `<blink>` tags.

I wish SmartyPants used named entities like `like` `&mdash;`
instead of decimal-encoded entities like `&#8212;`.

    this is a 
    a piece of 
    coding

&copy;
k
***
un\*frigging\*believable


1986\. What a great season.

## All about lists

adfbc  
def  
[igh](www.example.com)



1. Crack three eggs over a bowl.

    Now, you're going to want to crack the eggs in such a way that you don't make a mess.

    If you _do_ make a mess, use a towel to clean it up!

2. Pour a gallon of milk into the bowl.

    Basically, take the same guidance as above: don't be messy, but if you are, clean it up!

3. Rub the salmon vigorously with butter.

    By "vigorous," we mean a strictly vertical motion. Julia Child once quipped:
    > Up and down and all around, that's how butter on salmon goes.
4. Drop the salmon into the egg-milk bowl.

    Here are some techniques on salmon-dropping:

    * Make sure no trout or children are present
    * Use both hands
    * Always have a towel nearby in case of messes* group a


* group a
    * item a1
    * item a1
    * item a1
* group b
    * item b1
    * item b1
    * item b1
        * item b11
    * item b1
    * item b1
    * item b1


| Mechanic     | Description     |
|--------------|----------------|
| Resource     | Collect items  |
| Puzzle       | Solve riddles  |

>this was just a paragraph
>
> then it became more than that
but it continues ofcourses
>
> # hello sir
>
>lorem afasd fas fadf a dfa slorem afasd fas fadf a dfa slorem afasd fas fadf a dfa slorem afasd fas fadf a dfa slorem afasd fas fadf a dfa slorem afasd fas fadf a dfa slorem afasd fas fadf a dfa slorem afasd fas fadf a dfa slorem afasd fas fadf a dfa slorem afasd fas fadf a dfa slorem afasd fas fadf a dfa slorem afasd fas fadf a dfa sfffffffffffflorem afasd fas fadf a dfa sf

**sir**

[*] - okay
[ ] - okay
[ ] - _okay_

```mermaid
graph TD;
    Player_Enters --> Player_Drinks;
    Player_Enters --> Player_Fights;
    Player_Fights --> Player_Exits;
    Player_Drinks --> Player_Exits;
```