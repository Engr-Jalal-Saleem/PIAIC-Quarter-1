"use strict";
// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. 
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. 
// Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
// If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
// Make at least one new function call that includes the number of tracks on an album.
// function make_album(music_album:object ,artist_name:string, album_title:string) {
//     return `${artist_name}, ${album_title}`;
// }
// console.log(make_album("music_album","Lahore", "Pakistan"));
// Function to create an album object
function makeAlbum(artist, title, tracks) {
    const album = {
        artist: artist,
        title: title
    };
    // Add tracks to the album object if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating three albums without specifying the number of tracks
const album1 = makeAlbum("Artist1", "Album1");
const album2 = makeAlbum("Artist2", "Album2");
const album3 = makeAlbum("Artist3", "Album3");
// Creating an album with the number of tracks specified
const albumWithTracks = makeAlbum("Artist4", "Album4", 12);
// Printing album information
console.log("Album 1:", album1);
console.log("Album 2:", album2);
console.log("Album 3:", album3);
console.log("Album with Tracks:", albumWithTracks);
