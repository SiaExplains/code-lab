-   Change the behavior of things in runtime instead of compile time!
-   attach an extra responsibilty to object dynamiclly

() Concerete Component
[] Decorator

() -> SimpleBehavior : concerte object
B1 -> [->()->] -> SimpleBehavior+B1 : decorate with a new ability
B2 -> {[->()->]} -> SimpleBehavior+B1+B2 : decorate with a new ability
B3 -> <{[()]}> decorate ...
