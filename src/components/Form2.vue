<template>
<div>
    <div class="col-12">
        <div class="col-6">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input v-bind:class="{ 'is-invalid': message.length > 2 }"
                     type="email" class="form-control isvalid" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      <div v-if="message.length > 2" id="hide">
                        <img src="../assets/logo.png">
                     </div>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
        <div class="col-6">
        
        </div>
    </div>
        


        <div>
        <input v-model="message" v-on:keyup="keymonitor" placeholder="edit me">
        <p>Message is: {{ message }}</p>
    </div>
    <div>
        <p v-if="seen">Message Can Be Seen!</p>
        <input v-model="message" v-on:keyup="seen =! seen" placeholder="Push me">
    </div>
</div>

</template>

<script>
  export default {
    name: 'form2',
    data () {
        return {
            message: 'xxx',
            seen: false
        }
    },
    methods: {
        keymonitor: function(event) {
            console.log(event.key);
            this.seen= true;
            if(event.key == "Enter"){
                console.log('the id of the input was:' + event.currentTarget.id);
                console.log("enter key was pressed!");
            }
        }
    }
  }
</script>