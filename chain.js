const db = require('./src/mongo/mongod');

const Task = require('./src/models/tasks')

// Task.findByIdAndUpdate('5dcffd63faa1c34e231e8ac9',{completed:true}).then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed:true})
// }).then((results)=>{
//     console.log(results)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     db.close();
// })

const updateAndCount = async (id,completed) => {
    const task = await Task.findByIdAndUpdate(id,{completed})
    const count = await Task.countDocuments({completed})
    return count;
}

updateAndCount('5dcffd63faa1c34e231e8ac9',false).then((res)=>{
    console.log(res);
    
})