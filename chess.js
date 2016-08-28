var i=0,j=0,k=1,n=1,l="white",m="Gray",temp="",pos2=0,mov=1,mov2=1,y="",flag="",drawG=0,drawW=0,drawG1=0,drawW1=0;
				
				//var image=["Grayrook.png","GrayKnight.png","GrayBishop.png","GrayKing.png","GrayQueen.png","GrayBishop2.png","GrayKnight2.png","Grayrook2.png"," GrayPawn1.png"," GrayPawn2.png"," GrayPawn3.png"," GrayPawn4.png"," GrayPawn5.png"," GrayPawn6.png"," GrayPawn7.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn5.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn5.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn5.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn5.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn8.png"," GrayPawn5.png"," GrayPawn8.png","WhitePawn1.png","WhitePawn2.png","WhitePawn3.png","WhitePawn4.png","WhitePawn5.png","WhitePawn6.png","WhitePawn7.png","WhitePawn8.png","Whiterook.png","WhiteKnight.png","WhiteBishop.png","WhiteKing.png","WhiteQueen.png","WhiteBishop2.png","WhiteKnight2.png","Whiterook2.png"];
				
				var image=["Grayrook1.png","GrayKnight1.png","GrayBishop1.png","GrayKing.png","GrayQueen.png","GrayBishop2.png","GrayKnight2.png","Grayrook2.png"," GrayPawn1.png"," GrayPawn2.png"," GrayPawn3.png"," GrayPawn4.png"," GrayPawn5.png"," GrayPawn6.png"," GrayPawn7.png"," GrayPawn8.png"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","WhitePawn1.png","WhitePawn2.png","WhitePawn3.png","WhitePawn4.png","WhitePawn5.png","WhitePawn6.png","WhitePawn7.png","WhitePawn8.png","Whiterook1.png","WhiteKnight1.png","WhiteBishop1.png","WhiteKing.png","WhiteQueen.png","WhiteBishop2.png","WhiteKnight2.png","Whiterook2.png"];
				for(i=1;i<=8;i++)
				{
					for(j=1;j<=8;j++) 
					{		
						document.write("<input type='button' id='btn0" + k + "' class='block' style='background-image:url( " + image[k-1] +  ");background-repeat:no-repeat;background-size:50% 50%;background-position:center;'></input>");
						document.getElementById("btn0" + k +"").style.backgroundColor=l;
						if(j%2==0)
						{
							document.getElementById("btn0" + k +"").style.backgroundColor=m;
						}	
						k++;
					}
					document.write("<br>");
					temp=m;
					m=l;
					l=temp;
				}	
				
			
			for(i=1;i<=64;i++)
		{		
					
				document.getElementById("btn0" + i +"").addEventListener("click", function()
			{	
				
				//if(document.getElementById(this.id).style.backgroundImage!="" && )
				//var a="";
				//if(flag!="" && this.style.backgroundImage=""){}else if(flag!="" && this.style.backgroundImage!=""){}
				
				if(document.getElementById(this.id).style.backgroundColor=="red"){
					//alert("deven");
					
					if(flag.length > 1){
					//alert(flag);
						if(flag=="White"){
							flag="Gray";
						}else {
							flag="White";
						}
					}
					//alert(flag);
					}
				
				
				
				//alert(flag);
				//alert(this.style.backgroundImage);
				//alert((this.style.backgroundImage).search(flag));
				
				if(this.style.backgroundImage.search(flag)>1){alert("Please wait for your turn");}else{
					y = document.getElementById(this.id).style.backgroundImage;
					var pos = parseInt((this.id.substring(this.id.length - 2, this.id.length)));
					// promotion of pawn to queen
					
					
					
					//alert(pos);
						// Knight's Movements
						if(y.search("Knight")>1 && ((document.getElementById(this.id).style.backgroundColor=="gray") || (document.getElementById(this.id).style.backgroundColor=="white" )))
						{
							pos2=pos;
							l="white";m="Gray";temp="";k=1;
							for(i=1;i<=8;i++)
							{
								for(j=1;j<=8;j++)
								{		
									document.getElementById("btn0" + k +"").style.backgroundColor=l;	// resetting the checkboard color
									if(j%2==0)
									{
										document.getElementById("btn0" + k +"").style.backgroundColor=m;
									}	
									k++;
								}
								
								temp=m;
								m=l;
								l=temp;
							}
							
							if((pos+15)<=64 || (pos+17)<=64)
							{
								if(pos>=49 && pos<=64) {}
								else{
									if (pos%8==0){document.getElementById("btn0" + (pos+15) +"").style.backgroundColor="#33ff66";}
									else if(pos%8==1) document.getElementById("btn0" + (pos+17) +"").style.backgroundColor="#33ff66";
									else{document.getElementById("btn0" + (pos+15) +"").style.backgroundColor="#33ff66";
									document.getElementById("btn0" + (pos+17) +"").style.backgroundColor="#33ff66";
									}
								}
							}
							if((pos-15)>0 || (pos-17)>0)
							{
								if(pos>=1 && pos<=16) {}
								else{
									if(pos%8==1)document.getElementById("btn0" + (pos-15) +"").style.backgroundColor="#33ff66";
									else if(pos%8==0) document.getElementById("btn0" + (pos-17) +"").style.backgroundColor="#33ff66";
									else{
									document.getElementById("btn0" + (pos-15) +"").style.backgroundColor="#33ff66";
									document.getElementById("btn0" + (pos-17) +"").style.backgroundColor="#33ff66";
									}
								}
							}
							if(pos%8==0 || pos%8==7){} 
								else{
									if((pos+10)<=64)document.getElementById("btn0" + (pos+10) +"").style.backgroundColor="#33ff66";
									if((pos-6)>0)document.getElementById("btn0" + (pos-6) +"").style.backgroundColor="#33ff66";
									}
								if(pos%8==1 || pos%8==2) {}
								else{
									if((pos-10)>0)document.getElementById("btn0" + (pos-10) +"").style.backgroundColor="#33ff66";
									if((pos+6)<=64)document.getElementById("btn0" + (pos+6) +"").style.backgroundColor="#33ff66";
								}
								
						}
						// Bishop's movements
						else if(y.search("Bishop")>1 && ((document.getElementById(this.id).style.backgroundColor=="gray") || (document.getElementById(this.id).style.backgroundColor=="white" )))
						{
							pos2=pos;
							l="white";m="Gray";temp="";k=1;
							for(i=1;i<=8;i++)
							{
								for(j=1;j<=8;j++)
								{		
									document.getElementById("btn0" + k +"").style.backgroundColor=l;
									if(j%2==0)
									{
										document.getElementById("btn0" + k +"").style.backgroundColor=m;
									}	
									k++;
								}
								
								temp=m;
								m=l;
								l=temp;
							}
							
							for(var i=pos-9;i>=0;i=i-9)
							{
								if (pos%8==1) break;
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
								if(i%8==1) break;
							}
							for(var i=pos+7;i<=64;i=i+7)
							{
								if (pos%8==1) break;
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
								if(i%8==1) break;
							}
							for(var i=pos+9;i<=64;i=i+9)
							{
								if (pos%8==0) break;
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
								if(i%8==0) break;
							}
							for(var i=pos-7;i>=0;i=i-7)
							{
								if (pos%8==0) break;
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
								if(i%8==0) break;
							}
						}
						// King's movement
						else if (y.search("King")>1 && ((document.getElementById(this.id).style.backgroundColor=="gray") || (document.getElementById(this.id).style.backgroundColor=="white" )))
						{
							pos2=pos;
							l="white";m="gray";temp="";k=1;
							for(i=1;i<=8;i++)
							{
								for(j=1;j<=8;j++)
								{		
									document.getElementById("btn0" + k +"").style.backgroundColor=l;	// resetting the checkboard color
									if(j%2==0)
									{
										document.getElementById("btn0" + k +"").style.backgroundColor=m;
									}	
									k++;
								}
								
								temp=m;
								m=l;
								l=temp;
							}
							
							if((pos+7)<=64 || (pos+8)<=64 || (pos+9)<=64 || (pos+1)<=64)
							{
								if (pos%8==0)
									{
										document.getElementById("btn0" + (pos+7) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos+8) +"").style.backgroundColor="#33ff66";
									}
									else if(pos%8==1) 
									{
										if(pos==57)document.getElementById("btn0" + (pos+1) +"").style.backgroundColor="#33ff66";
										
										else{
										document.getElementById("btn0" + (pos+8) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos+1) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos+9) +"").style.backgroundColor="#33ff66";}
									}
									else if(pos>=56 && pos<=64)
									{
										document.getElementById("btn0" + (pos-1) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos-8) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos+1) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos-9) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos-7) +"").style.backgroundColor="#33ff66";
									}
									else
									{
										document.getElementById("btn0" + (pos+8) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos+1) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos+9) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos+7) +"").style.backgroundColor="#33ff66";
									}
							}
							if((pos-7)>=0 || (pos-8)>=0 || (pos-9)>=0 || (pos-1)>=0)
							{
								if (pos%8==0)
									{
										if(pos==8){document.getElementById("btn0" + (pos-1) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos-9) +"").style.backgroundColor="#33ff66";}
										else{
										document.getElementById("btn0" + (pos-1) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos-9) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos-8) +"").style.backgroundColor="#33ff66";}
										
									}
									else if(pos%8==1) 
									{
										document.getElementById("btn0" + (pos-8) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos-7) +"").style.backgroundColor="#33ff66";
									}
									else if(pos>=1 && pos<=8)
									{
										document.getElementById("btn0" + (pos-1) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos+8) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos+1) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos+9) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos+7) +"").style.backgroundColor="#33ff66";
									}
									else{document.getElementById("btn0" + (pos-8) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos-1) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos-9) +"").style.backgroundColor="#33ff66";
										document.getElementById("btn0" + (pos-7) +"").style.backgroundColor="#33ff66";
									}
							}
						}
						// Rook's movement
						else if (y.search("rook")>1 && ((document.getElementById(this.id).style.backgroundColor=="gray") || (document.getElementById(this.id).style.backgroundColor=="white" )))
						{
							
							pos2=pos;
							l="white";m="gray";temp="";k=1;
							for(i=1;i<=8;i++)
							{
								for(j=1;j<=8;j++)
								{		
									document.getElementById("btn0" + k +"").style.backgroundColor=l;
									if(j%2==0)
									{
										document.getElementById("btn0" + k +"").style.backgroundColor=m;
									}	
									k++;
								}
								
								temp=m;
								m=l;
								l=temp;
							}
							
							for(var i=pos-8;i>=0;i=i-8)
							{
								if(i!=0){
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;}
							}
							for(var i=pos+8;i<=64;i=i+8)
							{
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
							}
							for(var i=pos+1;i<=64;i=i+1)
							{
								if (pos%8==0) break;
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
								if(i%8==0) break;
							}
							for(var i=pos-1;i>=0;i=i-1)
							{
								if (pos%8==1) break;
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
								if(i%8==1) break;
							}
						}
						// Queen's movement
						else if (y.search("Queen")>1 && ((document.getElementById(this.id).style.backgroundColor=="gray") || (document.getElementById(this.id).style.backgroundColor=="white" )))
						{
							pos2=pos;
							l="white";m="gray";temp="";k=1;
							for(i=1;i<=8;i++)
							{
								for(j=1;j<=8;j++)
								{		
									document.getElementById("btn0" + k +"").style.backgroundColor=l;	// resetting the checkboard color
									if(j%2==0)
									{
										document.getElementById("btn0" + k +"").style.backgroundColor=m;
									}	
									k++;
								}
								
								temp=m;
								m=l;
								l=temp;
							}
							
								
							for(var i=pos-9;i>=0;i=i-9)
							{
								if (pos%8==1) break;
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
								if(i%8==1) break;
							}
							for(var i=pos+7;i<=64;i=i+7)
							{
								if (pos%8==1) break;
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
								if(i%8==1) break;
							}
							for(var i=pos+9;i<=64;i=i+9)
							{
								if (pos%8==0) break;
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
								if(i%8==0) break;
							}
							for(var i=pos-7;i>=0;i=i-7)
							{
								if(i<=0){break;}
								if (pos%8==0) break;
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
								if(i%8==0) break;
							}
							
							for(var i=pos-8;i>=0;i=i-8)
							{
								if(i<=0){break;}
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
							}
							for(var i=pos+8;i<=64;i=i+8)
							{
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
							}
							for(var i=pos+1;i<=64;i=i+1)
							{
								if (pos%8==0) break;
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
								if(i%8==0) break;
							}
							for(var i=pos-1;i>=0;i=i-1)
							{
								if (pos%8==1) break;
								document.getElementById("btn0" + i +"").style.backgroundColor="#33ff66";
								if(((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1) break;
								if(i%8==1) break;
							}
						}
						// Pawn's movement
						else if (y.search("Pawn")>1 && ((document.getElementById(this.id).style.backgroundColor=="gray") || (document.getElementById(this.id).style.backgroundColor=="white" )))
						{
							pos2=pos;
							l="white";m="gray";temp="";k=1;
							for(i=1;i<=8;i++)
							{
								for(j=1;j<=8;j++)
								{		
									document.getElementById("btn0" + k +"").style.backgroundColor=l;	// resetting the checkboard color
									if(j%2==0)
									{
										document.getElementById("btn0" + k +"").style.backgroundColor=m;
									}	
									k++;
								}
								
								temp=m;
								m=l;
								l=temp;
							}
							if(y.search("WhitePawn")>1)
							{
								if(pos>=1 && pos<=8){}
								else{
								if(((document.getElementById("btn0" + (pos-8) +"").style.backgroundImage).search("png"))<1){
									document.getElementById("btn0" + (pos-8) +"").style.backgroundColor="#33ff66";
								}}
							}
							else{
								if(pos>=57 && pos<=64){}
								else{
								if(((document.getElementById("btn0" + (pos+8) +"").style.backgroundImage).search("png"))<1){
									document.getElementById("btn0" + (pos+8) +"").style.backgroundColor="#33ff66";
								}}
							}
							if((pos+9)<=64)
							{
								if(pos%8==0){}
								else{
								if(((document.getElementById("btn0" + (pos+9) +"").style.backgroundImage).search("png"))>1){
									document.getElementById("btn0" + (pos+9) +"").style.backgroundColor="#33ff66";
								}}
							}
							if((pos+7)<=64)
							{
								if(pos%8==1){}
								else{
								if(((document.getElementById("btn0" + (pos+7) +"").style.backgroundImage).search("png"))>1){
									document.getElementById("btn0" + (pos+7) +"").style.backgroundColor="#33ff66";
								}
								}
							}
							if((pos-9)>=0)
							{
								if(pos%8==1){}
								else{
								if(((document.getElementById("btn0" + (pos-9) +"").style.backgroundImage).search("png"))>1){
									document.getElementById("btn0" + (pos-9) +"").style.backgroundColor="#33ff66";
								}}
							}
							if((pos-7)>=0)
							{
								if(pos%8==0){}
								else{
								if(((document.getElementById("btn0" + (pos-7) +"").style.backgroundImage).search("png"))>1){
									document.getElementById("btn0" + (pos-7) +"").style.backgroundColor="#33ff66";
								}}
							}
						}
						
						//Moving the Pawns
						else
						{
							
							var x=this.style.backgroundImage;
							//alert(x);
							//alert(((x.substring(x.length-18,x.length-1)).substring((x.substring(x.length-18,x.length)).indexOf("/")+1,x.length-2)));
							
							if(document.getElementById(this.id).style.backgroundColor=="rgb(51, 255, 102)" || document.getElementById(this.id).style.backgroundColor=="red")
							{
								if(((this.style.backgroundImage).search("White"))>1){
									document.getElementById("User1").innerHTML=document.getElementById("User1").innerHTML + "<input type='button' class='block' style='height:12.5%;width:25%;border:0px solid transparent;background-color:transparent;background-image: "+ x + ";background-repeat:no-repeat;background-size:50% 50%;background-position:center;'></input>";
									drawW++;
								}
								else if(((this.style.backgroundImage).search("Gray"))>1)
								{
									document.getElementById("User2").innerHTML=document.getElementById("User2").innerHTML + "<input type='button' class='block' style='height:12.5%;width:25%;border:0px solid transparent;background-color:transparent;background-image:"+ x + ";background-repeat:no-repeat;background-size:50% 50%;background-position:center;'></input>";
									drawG++;
								}
								
								if(x.search("GrayKing")>1){
									document.getElementById("gameover").style.display='block';
									document.getElementById("gameovertext").innerHTML=document.getElementById("FU").value + " </br>wins here";
								}
								
								if(x.search("WhiteKing")>1){
									document.getElementById("gameover").style.display='block';
									document.getElementById("gameovertext").innerHTML=document.getElementById("SU").value + " </br>wins here";
								}
								
								if(((document.getElementById("btn0" + pos2 +"").style.backgroundImage).search("White"))>1)  {document.getElementById("U1").innerHTML ="Move: " + (mov++);flag="White";}
								else if (((document.getElementById("btn0" + pos2 +"").style.backgroundImage).search("Gray"))>1) {document.getElementById("U2").innerHTML ="Move: " + (mov2++);flag="Gray";}
								
								this.style.backgroundImage=document.getElementById("btn0" + pos2 +"").style.backgroundImage;
								
								// promoting pawns to queen
								
								if(document.getElementById("btn0" + pos2 +"").style.backgroundImage.search("WhitePawn")>1 && pos>=1 && pos<=8){
									document.getElementById("btn0" + pos +"").style.backgroundImage="url('WhiteQueen.png')";
								}
								if(document.getElementById("btn0" + pos2 +"").style.backgroundImage.search("GrayPawn")>1 && pos>=57 && pos<=64){
									document.getElementById("btn0" + pos +"").style.backgroundImage="url('GrayQueen.png')";
								}
								document.getElementById("btn0" + pos2 +"").style.backgroundImage="";
								
								if(drawG==15)drawG1++;
								if(drawW==15)drawW1++;
								if(drawG1==32 || drawW1==32){
									document.getElementById('drawn').style.display='block';
									document.getElementById('drawtext').innerHTML="No More Movement left <br/>Game Draw";
									setTimeout(function(){document.getElementById('drawn').style.display='none';location.reload();},3500);}
				
								
								
							}
							
							
							
							l="white";m="gray";temp="";k=1;
							for(i=1;i<=8;i++)
							{
								for(j=1;j<=8;j++)
								{		
									document.getElementById("btn0" + k +"").style.backgroundColor=l;	// resetting the checkboard color
									if(j%2==0)
									{
										document.getElementById("btn0" + k +"").style.backgroundColor=m;
									}	
									k++;
								}
								
								temp=m;
								m=l;
								l=temp;
							}
							
						}
						
						
						// resetting the checkboard and enabling move only on enemy or on empty space
						l="white";m="gray";temp="";k=1;
						if(y.search("Gray")>1 )
						{
							for(i=1;i<=8;i++)
							{
								for(j=1;j<=8;j++)
								{	
									if(document.getElementById("btn0" + k +"").style.backgroundImage.search("Gray")>1)
									{ 
										document.getElementById("btn0" + k +"").style.backgroundColor=l;
										if(j%2==0)
										{
											document.getElementById("btn0" + k +"").style.backgroundColor=m;
										}
									}
									else{}
									k++;
								}
								temp=m;
								m=l;
								l=temp;
							}
						}
						else if(y.search("White")>1)
						{
							for(i=1;i<=8;i++)
							{
								for(j=1;j<=8;j++)
								{	
									if(document.getElementById("btn0" + k +"").style.backgroundImage.search("White")>1)
									{ 
										document.getElementById("btn0" + k +"").style.backgroundColor=l;
										if(j%2==0)
										{
											document.getElementById("btn0" + k +"").style.backgroundColor=m;
										}
									}
									else{}
									k++;
								}
								temp=m;
								m=l;
								l=temp;
							}
							
						}
						else
						{
							for(i=1;i<=8;i++)
							{
								for(j=1;j<=8;j++)
								{	
										document.getElementById("btn0" + k +"").style.backgroundColor=l;
										if(j%2==0)
										{
											document.getElementById("btn0" + k +"").style.backgroundColor=m;
										}
									k++;
								}
								temp=m;
								m=l;
								l=temp;
							}
						}
						
						
							for(i=1;i<=64;i++)
							{
								if(document.getElementById("btn0" + i +"").style.backgroundColor=="rgb(51, 255, 102)" && ((document.getElementById("btn0" + i +"").style.backgroundImage).search("png"))>1)
								{document.getElementById("btn0" + i +"").style.backgroundColor="red";}
							}
						
				}		
				
			}
				
			);	
		}