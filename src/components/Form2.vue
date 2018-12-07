<template>
<div>
    <div>
        <div class="jumbotron">
            <div class="row align-items-center">
                <div class="col">
                </div>
                 <div class="col">
                    <h1>Votre avis sur la nuit de l'info 2018</h1>
                </div>
                 <div class="col">
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col"></div>
                <div class="col">
                     <div class="form-group">
                        <label for="nom">Nom</label>
                        <input v-on:keypress="keymonitor" v-model="nom" v-bind:class="{ 'is-invalid': nom.length > 10 }"
                        type="email" class="form-control isvalid" id="nom" aria-describedby="emailHelp" 
                        placeholder="Saisir nom">
                    </div>
                </div>
                <div class="col">
                        <div v-model="seenName" v-if="nom.length > 10" id="hide">
                            <img src="../assets/nomMax.png">
                        </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col"></div>
                <div class="col">
                     <div class="form-group">
                        <label for="pseudo">Prénom</label>
                        <input v-model="prenom" v-bind:class="{ 'is-invalid': prenom.length > 10 }"
                        type="email" class="form-control isvalid" id="prenom" aria-describedby="emailHelp" 
                        placeholder="Saisir prénom">
                    </div>
                </div>
                <div class="col">
                        <div v-if="prenom.length > 10" id="hide">
                            <img src="../assets/prenomMax.png">
                        </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col"></div>
                <div class="col">
                     <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="email" v-bind:class="{ 'is-invalid': email.length > 10 }"
                        type="email" class="form-control isvalid" id="email" aria-describedby="emailHelp" 
                        placeholder="exemple@domaine.com">
                    </div>
                </div>
                <div class="col">
                        <div v-if="prenom.length > 10" id="hide">
                            <img src="../assets/prenomMax.png">
                        </div>
                </div>
            </div>
        </div>
    </div>

    <div>
        <div class="jumbotron">
        <div class="row align-items-center">
            <div class="col">
                
            </div>
            <div class="col">
                        <h1>Votre avis sur la nuit de l'info 2018</h1>
                <form>
                    <div class="form-group">
                        <label for="pseudo">Votre nom</label>
                        <input v-bind:class="{ 'is-invalid': message.length > 2 }"
                        type="email" class="form-control isvalid" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        placeholder="Saisir nom">
                        <div v-if="message.length > 2" id="hide">
                            <img src="../assets/logo.png">
                        </div>
                    </div>
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
            <div class="col">
            
            </div>
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

</div>


</template>

<script>
  export default {
    name: 'form2',
    data () {
        return {
            message: 'xxx',
            nom: '',
            prenom: '',
            email: '',
            seen: false,
            seenName: false
        }
    },
    methods: {
        keymonitor: function(event) {
            if(event.key.match(/^[A-Za-z]+$/)){
                console.log(event.key);
            }
            else{
               this.seenName = true;
            }
            //console.log(event.key);
            this.seen= true;
            if(event.key == "Enter"){
                console.log('the id of the input was:' + event.currentTarget.id);
                console.log("enter key was pressed!");
            }
        }
    }
  }
</script>