const memeBtn=document.querySelector('#meme-btn');
const memeTitle=document.querySelector('.meme-title');
const memeImage=document.querySelector('.meme-image');
const memeBy=document.querySelector('.meme-by');

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeBy.innerHTML = `Meme by: ${author}`;
  };

const generateMeme=()=>{
    fetch('https://meme-api.com/gimme/wholesomememes')
      .then((response)=>response.json())
      .then((data)=>{
        updateDetails(data.url, data.title, data.author);
      });
}

memeBtn.addEventListener('click',generateMeme);



