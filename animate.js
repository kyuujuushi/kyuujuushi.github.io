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

// frame file names so I could just call upon them when I want to

// these frames are of calm Zach
// const CALM = [
//     "./animation-test-files/frame_0000.png", 
//     "./animation-test-files/frame_0001.png", 
//     "./animation-test-files/frame_0002.png",
//     "./animation-test-files/frame_0003.png",
//     "./animation-test-files/frame_0004.png",
//     "./animation-test-files/frame_0005.png",
//     "./animation-test-files/frame_0006.png",
//     "./animation-test-files/frame_0007.png"
// ]

// these frames are of Zach realizing the bs
// const TRANSITION = [
//     "./animation-test-files/frame_0008.png",
//     "./animation-test-files/frame_0009.png",
//     "./animation-test-files/frame_0010.png",
//     "./animation-test-files/frame_0011.png",
//     "./animation-test-files/frame_0012.png",
//     "./animation-test-files/frame_0013.png",
//     "./animation-test-files/frame_0014.png",
//     "./animation-test-files/frame_0015.png"
// ]

// these frames are of Zach being shocked at the bs 
// const SHOCKED = [
//     "./animation-test-files/frame_0016.png",
//     "./animation-test-files/frame_0017.png",
//     "./animation-test-files/frame_0018.png",
//     "./animation-test-files/frame_0019.png",
//     "./animation-test-files/frame_0020.png",
//     "./animation-test-files/frame_0021.png",
//     "./animation-test-files/frame_0022.png",
//     "./animation-test-files/frame_0023.png"
// ]

// soon-to-be function of Zacchie being shocked
// let frame_count = 0;
// let image = document.getElementById("ani");

// omg this kills the hoe wot???
// while (true) {
//     if (frame_count > SHOCKED.length){
//         frame_count = 0;
//     }
//     else{
//         image.setAttribute(src) = SHOCKED[frame_count];
//     }
//     frame_count++;
// }

function active_animation(x) {
    x.src = "ani-test-1.png";
}
function reset_animation(x) {
    x.src = "ani-test-0.png";
}