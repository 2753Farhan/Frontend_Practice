function customRender(reactElement,mainConteiner){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHtml = reactElement.children
    domElement.setA
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainConteiner = document.querySelector('#root')

customRender(reactElement, mainConteiner)