# Prototype

The concept of prototyping is to reduce the requirement of firing more 'new' calls. 

I ran the calls 1,000,000 to see the speed difference. 

It seems my orginal clone function that users Object.assign is actually much slower than creating a new object. 
However a direct clone assigning each method and variable works much quicker. 

However this design pattern is only going to be of any benefit as massivly highscale applications. 
