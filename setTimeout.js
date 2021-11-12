for (var i = 0; i <= 5; i++) {
    setTimeout(() => {
      console.log(x);
    }, 1000);
}

for (var i = 0; i <= 5; i++) {
  function li(x) {
    setTimeout(() => {
      console.log(x);
    }, 1000);
  }
  li(i)
}

function b(base){
    return (num)=>{
        console.log(num+base)
    }
}
const x=b(6)
x(10)
x(15)
