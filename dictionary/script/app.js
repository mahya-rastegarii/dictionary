let $ = document

const btnSearch = $.querySelector('.btn-search')
const inputWord = $.querySelector('input')
const mainContainer = $.querySelector('.container-word')



function dictionaryApt() {
    let inputWordValue = inputWord.value



    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWordValue}`)
        .then(res => res.json())
        .then(data => {
            createTemplate(data)
            console.log(data);
            
        })
        .catch( () =>{

           mainContainer.innerHTML = '<div class="mt-8 w-full flex justify-center items-center"><h2 class="text-2xl font-bold text-red-600 "> Couldn`t Find The Word </h2></div>'
        }
        )
}

function createTemplate(data) {
    mainContainer.innerHTML = ''


    // let containerWord = $.createElement('div')
    // containerWord.className = 'w-full flex justify-around  mt-8'

    // let wordDiv = $.createElement('div')
    // wordDiv.className = 'w-full flex justify-start px-4'

    // let word = $.createElement('h1')
    // word.className = 'text-3xl font-bold text-rose-900'
    // word.innerHTML = data[0].word

    // wordDiv.appendChild(word)

    // let audioElem = $.createElement('audio')
    // audioElem.className = 'sound'
    // audioElem.setAttribute('src', data[0].phonetics[0].audio)
    mainContainer.insertAdjacentHTML('beforeend', ` <div class=" w-full flex justify-around  mt-8">
    <div class="w-full flex justify-start px-4">

        <h1 class="md:text-3xl text-2xl font-bold text-rose-900">${data[0].word}</h1>
    </div>
   
          <audio src="${data[0].phonetics[0].audio || data[0].phonetics[1].audio || data[0].phonetics[2].audio }" class="sound">
                </audio>
          <div class="w-full flex justify-end px-4">
          <button class="soundBtn" onclick="playMusic()">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6  text-rose-900 cursor-pointer">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                </svg>
          </button>
                               
    
    </div>
</div>
<div class="w-full max-w-sm flex flex-col justify-start space-y-9 p-4 ">

<div class="flex">
    <span class=" md:text-xl text-sm text-gray-500">${data[0].meanings[0].partOfSpeech || data[0].meanings[1].partOfSpeech || data[0].meanings[2].partOfSpeech}</span><span class=" text-gray-500 ml-2 md:text-xl text-sm">${data[0].phonetics[0].text || data[0].phonetics[1].text}</span>
 </div>

    <div>


    <p class="md:text-xl text-sm text-gray-700 font-semibold "> ${data[0].meanings[1].definitions[0].definition} </p>

    </div>

    <div>


    <p class="text-sm md:text-xl text-gray-500 border-l-2  border-rose-900 pl-2 font-semibold"> ${data[0].meanings[1].definitions[0].example || ""} </p>

    </div>

</div>`)


}

btnSearch.addEventListener('click', dictionaryApt)
inputWord.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        dictionaryApt()
    }
})

function playMusic() {
    
    let sound = $.querySelector('.sound')

    sound.play()
}
