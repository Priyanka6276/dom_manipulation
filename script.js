let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

//===========================Part 1======================

const titleH1 = document.querySelector('#main-title')
// console.log(titleH1)

titleH1.innerHTML = '<h1> DOM Toretto </h1>'

//===========================Part 2======================

const bodyColor = document.querySelector('body')
// console.log(bodyColor)
bodyColor.style.backgroundColor = '#571611'

//===========================Part 3======================

const favThings = document.querySelector('#favorite-things')
// console.log(favThings)

const listItems = favThings.querySelectorAll('li')
// console.log(listItems)
const lastItem = listItems[listItems.length - 1]
// console.log(lastItem)

lastItem.remove()

//===========================Part 4======================

const specialTitles = document.querySelectorAll('.special-title')
// for(i = 0, i < specialTitles.length; i++;){
//   let fontSizeTitle = specialTitles[i]
//   fontSizeTitle.style.fontSize = "100px"
// }

let fontSize = 2
specialTitles.forEach((title) => {
    title.style.fontSize = fontSize + 'rem'
})

// console.log(specialTitles)

//===========================Part 5======================

const pastRaces = document.querySelector('#past-races')
// console.log(pastRaces)

const placeList = pastRaces.querySelectorAll('li')
// console.log(placeList)
const chicago = placeList[3]
// console.log(chicago)

chicago.remove()

//===========================Part 6======================

const newLocation = document.createElement('li')
newLocation.classList.add('#past-races')
newLocation.textContent = 'Toronto'
pastRaces.append(newLocation)

//===========================Part 7======================

const boxLocations = document.querySelector('.main')

const newDivLocation = document.createElement('div')

newDivLocation.classList.add('blog-post')

newDivLocation.classList.add('purple')

boxLocations.append(newDivLocation)

const newH2 = document.createElement('h2')

newH2.textContent = newLocation.textContent

newDivLocation.append(newH2)

const newP = document.createElement('p')

newP.textContent = 'My car survived Niagara Falls!'

newDivLocation.append(newP)


// console.log(newH2)
// console.log(newDivLocation)
// console.log(newP)

//===========================Part 8======================

const randomQuote = function() {
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};

const quoteRandom = document.querySelector('#quote-title')

// console.log(quoteRandom)

quoteRandom.addEventListener('click', (event) => {
  randomQuote()
})

//===========================Part 9======================

const blogPost = document.querySelectorAll('.blog-post')


// blogPostHover.addEventListener('mouseout', (event) => {
//   document.querySelector('.purple').classList.toggle('.purple')
// })
// blogPostHover.addEventListener('mouseout', (evt) =>{
//   blogPostHover.classList.toggle('red')
// })

blogPost.forEach((post) =>{
  post.addEventListener('mouseout', (evt) => {
    evt.target.classList.toggle('purple')
  })
})

blogPost.forEach((post) =>{
  post.addEventListener('mouseout', (evt) => {
    evt.target.classList.toggle('red')
  })
})

console.log(blogPost)