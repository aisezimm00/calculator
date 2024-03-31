

    function plus(){
        const firstNum = document.getElementById("firstNum").value
        const secNum = document.getElementById("secNum").value
        let pluss = firstNum + secNum
        document.getElementById("result").innerHTML = `Result: ${pluss}`
    }

    function minus(){
        const firstNum = document.getElementById("firstNum").value
        const secNum = document.getElementById("secNum").value
        let pluss = firstNum - secNum
        document.getElementById("result").innerHTML = `Result: ${pluss}`
    }

    function multiply(){
        const firstNum = document.getElementById("firstNum").value
        const secNum = document.getElementById("secNum").value
        let pluss = firstNum * secNum
        document.getElementById("result").innerHTML = `Result: ${pluss}`
    }

    function divide(){
        const firstNum = document.getElementById("firstNum").value
        const secNum = document.getElementById("secNum").value
        let pluss = firstNum / secNum
        document.getElementById("result").innerHTML = `Result: ${pluss}`
    }

    function stepen(){
        const firstNum = document.getElementById("firstNum").value
        const secNum = document.getElementById("secNum").value
        document.getElementById("result").innerHTML = Math.pow(firstNum,secNum)
    }
    function root(){
        const firstNum = document.getElementById("firstNum").value;
        const result = Math.sqrt(firstNum);
        document.getElementById("result").innerHTML = result;
    }
    