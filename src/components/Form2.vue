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
                            <img class= "nomMaxIMG" src="../assets/nomMax.png">
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
                            <img class= "nomMaxIMG" src="../assets/prenomMax.png">
                        </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col"></div>
                <div class="col">
                     <div class="form-group">
                              <label for="email">Email</label>
                              <input placeholder="exemple@domaine.com" type="email" v-model="email" v-validate="'required|email'" name="email" class="form-control" :class="{ 'is-invalid': errors.has('email') }" />
                              <div v-if="errors.has('email')" class="invalid-feedback">{{ errors.first('email') }}</div>
                    </div>
                </div>
                <div class="col">
                        <div v-if="errors.has('email')" id="hide">
                            <img class= "nomMaxIMG" src="../assets/prenomMax.png">
                        </div>
                </div>
            </div>
             <div class="row align-items-center">
                <div class="col"></div>
                <div class="col">
                     <button type="button" class="btn btn-warning center"><router-link to="/p">Valider</router-link></button>
                </div>
                <div class="col">
                </div>
            </div>
    </div>
</div></div>
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
                console.log(event.currentTarget.value);
                // event.currentTarget.value = event.currentTarget.value.slice(0, event.currentTarget.length);
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