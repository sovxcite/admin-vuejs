<template>
    <div class="spinner">
      <div class="loader"></div>
    </div>
</template>

<script>
export default {
  name: "PageSpinner"
};
</script>

<style scoped>
/*Spinner*/
.spinner {
     background-color: rgba(255, 255, 255, 0.95);
     display: flex;
     align-items: center;
     justify-content: center;
     position: fixed; 
     z-index: 10;
     left: 0;
     top: 0;
     width: 100%; 
     height: 100%;
     overflow: auto;
}
/*Loader*/
.loader,
.loader:after {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.loader {
  font-size: 8px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(134,134,134, 0.2);
  border-right: 1.1em solid rgba(134,134,134, 0.2);
  border-bottom: 1.1em solid rgba(134,134,134, 0.2);
  border-left: 1.1em solid #868686;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

