const { createApp } = Vue;

createApp({
    data() {
            return {
            tasksList: [
                {
                    text: `Task text 1`,
                    // status: `false`
                },
                {
                    text: `Task text 2`,
                    // status: `false`
                },
                {
                    text: `Task text 3`,
                    // status: `false`
                }
            ],
            newTaskData: {
                text: ""
            }
        };
    },
    methods: {
        onFormSubmit() {
            this.tasksList.push({
                text: this.newTaskData.text,
                
            });
            this.newTaskData.text= ""
        },
        onDeleteTaskBtn(i){
            this.tasksList.splice(i, 1)
        }
    }
}).mount("#app")
