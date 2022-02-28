/*
    This code is the thing that animates the bitch


    things to keep in mind

    frames from 0  to 7  --> calm Zach
    frames from 8  to 15 --> transition to shock
    frames from 16 to 23 --> shocked Zach

    the transition to shocked HAS to start at frame 7
    the trantition to calm has to be either frame 15 or 23 

    I might need to make an object class to make it more "efficiant"
    but i have no idea how to do that in java so imma just have an interger
    variable of isShocked when 0 is no and 1 is yes

    another thing, I don't know how fast the for loops are so uh imma just try
    the shocked frames only and figure out the frame rate
*/

// this viariable does nothing atm
var isShocked = 0

// imma just do the frames 16 to 23 