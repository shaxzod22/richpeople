let elSelect = document.querySelector('.select')
let wrapper = document.querySelector('.wrapper')
let input = document.querySelector('.input')
let valueSelect = elSelect.value 
let count = 1

let info = [
    {
        firstName: 'Elon Musk',
        money:193,
    },
    {
        firstName: 'Bernard Arnault',
        money:237,
    },
    {
        firstName: 'Jeff Bezos',
        money:142,
    },
    {
        firstName: 'Larry Ellison',
        money:131,
    },
    {
        firstName: 'Warren Buffett',
        money:112,
    },
    {
        firstName: 'Steve Ballmer',
        money:101,
    },
    {
        firstName: 'Larry Page',
        money:105,
    },
    {
        firstName: 'Sergey Brin',
        money:99,
    },
    {
        firstName: 'Carlos Slim Helu',
        money:98,
    },
    {
        firstName: 'Bill Gates',
        money:114,
    },
]

info.sort((a,b) => b.money - a.money)
wrapper.innerHTML = null

info.forEach((item) => {
    let title = document.createElement('p')
    title.setAttribute('class','title')
    title.textContent = `${count}. ${item.firstName} --- $${item.money} billion`
    wrapper.appendChild(title)
    count ++
})

elSelect.addEventListener('change', () => {
    let valueSelect = elSelect.value 
    let count = 1
    
    if(valueSelect === 'desc'){
        info.sort((a,b) => b.money - a.money)
        wrapper.innerHTML = null
        
        info.forEach((item) => {
            let title = document.createElement('p')
            title.setAttribute('class','title')
            title.textContent = `${count}. ${item.firstName} --- $${item.money} billion`
            wrapper.appendChild(title)
            count ++
        })
    } else if(valueSelect === 'asc'){
        info.sort((a,b) => a.money - b.money)
        wrapper.innerHTML = null
        
        info.forEach((item) => {
            let title = document.createElement('p')
            title.setAttribute('class','title')
            title.textContent = `${count}. ${item.firstName} --- $${item.money} billion`
            wrapper.appendChild(title)
            count ++
        })
    }
})

let er = []
input.addEventListener('keyup', () =>{
    er = []
    let valueSelect = elSelect.value 
    let count = 1
    let inputValue = input.value
    
    for(let i = 0;i < info.length;i++){
        if(info[i].money > inputValue){
            er.push(info[i])
        }
    }
    
    if(valueSelect === 'desc'){
        er.sort((a,b) => b.money - a.money)
        wrapper.innerHTML = null
        
        er.forEach((item) => {
            let title = document.createElement('p')
            title.setAttribute('class','title')
            title.textContent = `${count}. ${item.firstName} --- $${item.money} billion`
            wrapper.appendChild(title)
            count ++
        })
    } else if(valueSelect === 'asc'){
        er.sort((a,b) => a.money - b.money)
        wrapper.innerHTML = null
        
        er.forEach((item) => {
            let title = document.createElement('p')
            title.setAttribute('class','title')
            title.textContent = `${count}. ${item.firstName} --- $${item.money} billion`
            wrapper.appendChild(title)
            count ++
        })
    }
})

