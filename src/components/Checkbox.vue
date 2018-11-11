<template>
    <label class="cont"><slot/>
        <input type="checkbox" v-model="localValue">
        <span class="checkmark"></span>
    </label>
</template>

<script>
export default {
  name: "checkbox",
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      localValue: true
    };
  },
  watch: {
    localValue: {
      handler() {
        this.$emit("input", this.localValue);
      }
    }
  },
  created() {
    this.localValue = this.value;
  }
};
</script>

<style scoped>
/* Customize the label (the cont) */
.cont {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: inherit;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.cont input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 2px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #555;
}

/* On mouse-over, add a grey background color */
.cont:hover input ~ .checkmark {
  background-color: #888;
}

/* When the checkbox is checked, add a blue background */
.cont input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.cont input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.cont .checkmark:after {
        left: 10px;
    top: 4px;
    width: 6px;
    height: 15px;
    border: solid white;
    border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>



