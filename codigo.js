axios.get('https://leonardoapi.onrender.com/music')

    .then((res) => {
        
        res.data.songs.map((song) => {
            let div = document.createElement('div')
            div.classList.add('flex', 'items-center')

            div.innerHTML = `
            
                <img src="${song.path.front}" alt="" class="h-16">
                <div>
                    <p>${song.title}</p>
                </div> 
            `            
         div.addEventListener('click',()=>{

            document.getElementById('current-song-audio').setAttribute('src',song.path.audio)
         })    
            
            document.getElementById('track-list').appendChild(div)

        })
    })
