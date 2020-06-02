let htmlStructure = document.children[0].children
let count = 0

function getDomChildsViaArray(structure) {
    Array.from(structure).forEach(child => {
        if (child.children) {
            console.log(`${'->'.padStart(count*5, '-')} ${child.tagName}`)
            count++
            getChild(child.children)
        }
        count--
    })
}

function getChildViaFor(layer) {
    for (let child of layer) {
        if (child.children) {
            console.log(`${'->'.padStart(count*5, '-')} ${child.tagName}`)
            count++
            getChildViaFor(child.children)
        }
        count--
    }
}

function getNodeName(node, deep = 0) {
    console.log('--'.repeat(deep), node.nodeName);
    for (let item = node.firstChild; item; item = item.nextSibling)
    getNodeName(item, deep + 1);
}
