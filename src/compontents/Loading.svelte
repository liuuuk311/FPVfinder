<div class="wrapper">
    <span class="circle circle-1"></span>
    <span class="circle circle-2"></span>
    <span class="circle circle-3"></span>
    <span class="circle circle-4"></span>
    <span class="circle circle-5"></span>
  </div>

<style>
.wrapper{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%); 
}
.circle{
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: rgb(251, 191, 36);
  border-radius: 50%;
  animation: loading 1s cubic-bezier(.8, .5, .2, 1.4) infinite;
  transform-origin: bottom center;
  position: relative;
}
@keyframes loading{
  0%{
    transform: translateY(0px);
    background-color: rgb(252, 211, 77);
  }
  50%{
    transform: translateY(50px);
    background-color: rgb(251, 191, 36);
  }
  100%{
    transform: translateY(0px);
    background-color: rgb(252, 211, 77);
  }
}
.circle-1{
  animation-delay: 0.1s;
}
.circle-2{
  animation-delay: 0.2s;
}
.circle-3{
  animation-delay: 0.3s;
}
.circle-4{
  animation-delay: 0.4s;
}
.circle-5{
  animation-delay: 0.5s;
}
</style>