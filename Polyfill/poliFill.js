//[9,12,3,45].map(n => n * 2);

// como hacer q este disponible en todos los arrays 
// customMap estara disponible en todos los arrys
// this lleva el valor de [9,12,3,45]
Array.prototype.customMap = function(callback){ 
    const result = []

    for (let index = 0 ; index < this.length; index++ ){ 
        const ele = this[index]
        const transformetElement  = callback(ele, index)
        result.push(transformetElement)
    }
};

[9,12,3,45].customMap(n => n *2 )

