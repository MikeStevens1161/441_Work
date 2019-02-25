
var imageTags = ["image0","image1", "image2", "image3", "image4","image5",
"image6","image7","image8","image9",];
var blankImagePath = "images/JusticeLeague.png";

var player = { "firstname":"","lastname":"","score":""};
var firstNumber = -1;
var secondNumber = -1;
var attempts = 0;
var actualImages = new Array();
   
function printBlanks()
{
   // call our random image creation function
    createRandomImageArray();
    // create a for loop
    for(var i = 0; i < imageTags.length; i++)
    {
    // iterate through the image tag ids and sets the source 
        document.getElementById(imageTags[i]).src= blankImagePath;
    }
       
    
   
}

function createRandomImageArray()
{
  var actualImagePath = ["images/Aquaman.jpg", "images/Batman.png","images/Flash.jpeg",
"images/Superman.png","images/WonderWoman.jpeg"];
    var count = [0,0,0,0,0,];
    while(actualImages.length < 10)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)

        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);

            count[randomNumber] = count[randomNumber] + 1;
        }
    }
    
  
    
    
        
}

function flipImage(number)
{
    
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = actualImages[secondNumber];
       
    }
    else if(firstNumber < 0)
    {
        
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];
    }
    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >=0)
    {
        setTimeout(imagesDisapper,1000);
        attempts++;
    }
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >=0)
    {
        firstNumber = -1;
        secondNumber = -1;
    }


         
}

function imagesDisapper()
{
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber= -1;

}


function addToPlayer()
{
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    player.lastname = lastName;
    player.firstname = firstName;
    localStorage.setItem("playerInfo",JSON.stringify(player));
    window.location = "Index.html";

}

function playerInfo()
{
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);

}
function go()
{
    player.score = attempts;
    localStorage.setItem(playerInfo,JSON.stringify(player));
    window.location = "final.html"
    console.log(player.firstname,lastname,score);
}
