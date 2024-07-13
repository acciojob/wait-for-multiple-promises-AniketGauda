//your JS code here. If required.
const promise1 = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Promise 1");
        },1000);
    });
}

const promise2 = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Promise 2");
        },3000);
    });
}

const promise3 = ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Promise 3");
        },2000);
    });
}

const ditm = document.getElementById("loading");
const prnt = document.getElementById("output");

Promise.all([promise1(),promise2(),promise3()]).then((data)=>{
    ditm.style.display = "none";

    prnt.innerHTML +=
    `
    <tr>
        <td>${data[0]}</td>
        <td>2</td>
    </tr>

    <tr>
        <td>${data[1]}</td>
        <td>1</td>
    </tr>

    <tr>
        <td>${data[2]}</td>
        <td>3</td>
    </tr>

    <tr>
        <td>Total</td>
        <td>3.006</td>
    </tr>

    `
}).catch((err)=>{
    console.log(err,new Date());
})

console.log(new Date());