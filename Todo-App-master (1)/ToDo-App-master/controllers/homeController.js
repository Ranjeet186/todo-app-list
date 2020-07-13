

const Todo = require('../models/model');

//home page controller
module.exports.home =function(req,res){
    Todo.find({},function(err,tasks){
        if(err){
            console.log('Error in fetching from DB');
            return;
        }
        //console.log(tasks);
        res.render('home',{
        title:'Todo list',
        'tasks':tasks
    })
    });
    
}

//add tasks controller
module.exports.addTasks=function(req,res){
    //console.log(req.body)
    //tasks.push(req.body)
    Todo.create({
        category:req.body.category,
        description:req.body.description,
        date:req.body.date
    },function(err){    
        if(err){
            console.log('Error in Inserting');
            return;
        }
        else{
            console.log('Inserted successfully');
            return;
        }
    })
    res.redirect('back');
    }

    //delete tasks controller
module.exports.deleteTasks=function(req,res){
    console.log(req.body);
    console.log(Object.keys(req.body));
    Object.keys(req.body).forEach(function(key){
        console.log(key);
        Todo.findByIdAndDelete(key,function(err,data){
            if(err){
                console.log('error in deleting');   
                return;
            }
            
        })
        
    })
        
    // Object.keys(req.body).forEach(function(key){
    //     console.log(key[0]);
    //     let description = key.split(',');
    //     console.log('desc',description);
    //     let index = tasks.findIndex(task_index => task_index.description == description[0] && task_index.date == description[1]);
    //     if(index==-1){
    //         return;
    //     }
    //     tasks.splice(index,1);

    // let desc = Object.keys(req.body[0]);
    // let index = tasks.findIndex(task => task.description==desc);
    // tasks.splice(index,1);
    res.redirect('back');
    };
