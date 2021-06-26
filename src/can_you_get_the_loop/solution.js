function loop_size(node){
    let visited = []
    let index = -1;

    while(node != null){
        index = visited.indexOf(node)

        if(visited.includes(node)){
            break
        }

        visited.push(node)
        node = node.getNext()
    }

    return visited.length - index
}