//your parameter variables go here!


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(167,232,226)
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  beginShape();
  fill(245,223,185)
  stroke('black');
  strokeWeight(0.2);
  vertex(156,82)
  vertex(152,78)
  vertex(145,72)
  quadraticVertex(112,64,70,90)
  vertex(69,92)
  quadraticVertex(62,94,56,92)
  quadraticVertex(56,104,64,105)
  vertex(70,102)
  quadraticVertex(84,108,124,110)
  quadraticVertex(132,108,145,110)
  vertex(156,108)
  vertex(155,110)
  vertex(158,109)
  vertex(160,109.5)
  vertex(162,108)
  vertex(161.5,111)
  vertex(164,110)
  vertex(170,104)
  quadraticVertex(180,100,180,98)
  vertex(180,96)
  quadraticVertex(178,98,176,98)
  quadraticVertex(178,98,180,95.5)
  vertex(172,88)
  vertex(170,90)
  vertex(169,90)
  quadraticVertex(167,86,164,84)
  quadraticVertex(168,74,156,64)
  quadraticVertex(158,66,158,72)
  quadraticVertex(164,78,158,82)
  vertex(156,82)
endShape();


beginShape();
fill(245,223,185)
stroke('black');
  strokeWeight(0.2);
vertex(169,90)
vertex(166,84)
quadraticVertex(171,76,163,66)
quadraticVertex(165,68,163,72)
quadraticVertex(166,76,164,84)
vertex(167,86.5)
endShape();

beginShape();
vertex(157,84)
quadraticVertex(150,88,154,95)
quadraticVertex(149,100,146,100)
vertex(144,98)
endShape();
beginShape();
vertex(164,84)
quadraticVertex(169,89,165,95)
endShape();
beginShape();
vertex(144,98)
quadraticVertex(146,98,149,94)
endShape();

beginShape();
fill(128,0,0,124)
stroke(128,0,0,124)
strokeWeight(0.1)
vertex(156,82)
quadraticVertex(150,86,151,92)
vertex(150,96)
vertex(146,100)
quadraticVertex(149,100,154,95)
quadraticVertex(151,89,156,84)
vertex(157,84)
vertex(158,82)
endShape();
beginShape();
vertex(148,75)
vertex(144,82)
quadraticVertex(136,88,134,96)
quadraticVertex(138,90,146,86)
vertex(152,78)
endShape();

beginShape();
strokeWeight(0.2)
vertex(153,79)
vertex(151,84)
quadraticVertex(148,87,149,90)
quadraticVertex(149,92,149,94)
quadraticVertex(146,98,144,98)
quadraticVertex(139,97,134,96)
quadraticVertex(138,94,140,96)
vertex(145,88)
vertex(147,86)
quadraticVertex(144,92,143,96)
vertex(147,92)
quadraticVertex(147,90,148,86)
endShape();
beginShape();
vertex(165,85)
vertex(162,94)
vertex(160,96)
vertex(161,102)
vertex(159,109)
vertex(160,104)
quadraticVertex(158,106,157,109)
quadraticVertex(160,104,158,96)
vertex(157,94)
vertex(158,95)
vertex(160,90)
vertex(160,80)
vertex(162,86)
vertex(164,86)
endShape();

beginShape();
fill(245,223,185)
stroke('black');
  strokeWeight(0.2);
vertex(145,73)
quadraticVertex(148,56,142,44)
quadraticVertex(132,48,140,52)
quadraticVertex(144,56,142,72)
endShape();
beginShape();
fill(245,223,185)
vertex(140,72)
quadraticVertex(138,54,124,36)
quadraticVertex(114,40,124,44)
quadraticVertex(132,50,136,71)
endShape();
beginShape();
fill(245,223,185)
vertex(132,71)
quadraticVertex(124,50,110,36)
quadraticVertex(100,40,112,44)
quadraticVertex(118,48,128,71)
endShape();
beginShape();
fill(245,223,185)
vertex(124,71)
quadraticVertex(108,46,98,40)
quadraticVertex(90,46,102,48)
quadraticVertex(110,54,120,71)
endShape();
beginShape();
fill(245,223,185)
vertex(116,72)
quadraticVertex(96,50,92,48)
quadraticVertex(84,56,98,57)
quadraticVertex(102,60,112,72)
endShape();
beginShape();
fill(245,223,185)
vertex(108,73.4)
vertex(84,56)
quadraticVertex(80,64,90,64)
vertex(104,74)
endShape();

beginShape();
fill(255,255,255,190);
vertex(76,104)
quadraticVertex(70,106,68,110)
vertex(68,112)
quadraticVertex(64,118,70,124)
vertex(80,121)
quadraticVertex(84,120,94,107.5)
quadraticVertex(85,106.75,76,104)
endShape();

beginShape();
fill(245,223,185)
vertex(144,98)
quadraticVertex(110,90,80,102)
//quadraticVertex(62,112,66,112)
quadraticVertex(100,96,125,98)
quadraticVertex(100,96,75,108)
vertex(90,104)
vertex(96,104)
quadraticVertex(100,104,126,100)
quadraticVertex(102,104,84,112)
vertex(100,108)
vertex(102,108)
//quadraticVertex(109,108,128,102)
vertex(128,102)
//quadraticVertex(112,107,94,116)
quadraticVertex(107,106,94,116)
quadraticVertex(100,114,106,112)
//quadraticVertex(120,108,130,104)
vertex(130,104)
//quadraticVertex(110,116,105,122)
quadraticVertex(105,111,105,122)
vertex(133,105)
//quadraticVertex(118,120,116,126)
quadraticVertex(113,115,116,126)
vertex(136,106)
//quadraticVertex(127,126,128,129)
quadraticVertex(122,121,128,129)
//vertex(139,107)
vertex(140,107)
//quadraticVertex(139,130,141,130)
quadraticVertex(132,125,141,130)
//vertex(142,106)
vertex(144,104)
endShape();

beginShape();
fill(255,255,255,190);
vertex(96,77)
quadraticVertex(92,71,70,65)
quadraticVertex(66,67,67,72)
vertex(68,75)
quadraticVertex(69,77,64,80)
quadraticVertex(60,84,63,89)
quadraticVertex(66,93,69,92)
vertex(70,90)
quadraticVertex(83,82,96,77)
endShape();

beginShape();
fill(255,255,255,190);
//noStroke();
  vertex(56,92)
  vertex(48,86)
  quadraticVertex(42,82,36,80)
  quadraticVertex(30,78,24,86)
  quadraticVertex(18,94,24,102)
  quadraticVertex(28,108,40,110)
  vertex(64,105)
  quadraticVertex(56,104,56,92)
endShape();

  fill('white');
noStroke();
ellipse(160,90,10,10);

fill ('black');
noStroke();
ellipse(160,90,5,5);


}
