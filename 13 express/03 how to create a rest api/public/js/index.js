useRestAPI();

async function useRestAPI() {
    // console.log('Read all tasks:');
    // const res = await fetch ('api/tasks');
    // const tasks = await res.json();
    // console.log(tasks);
    
    let tasks = await fetchRestEndpoint('/api/tasks', 'GET');
    console.log(tasks);

    console.log('Read task 2:');
    const task2 = await fetchRestEndpoint('/api/tasks/2');
    console.log(task2);

    console.log('Create task:');
    let newTask = {
        action: 'do homework',
        done: false
    };
    newTask = await fetchRestEndpoint('/api/tasks', 'POST', newTask);
    console.log(newTask);

    console.log('Update task 2:');
    task2.done = true;
    await fetchRestEndpoint('/api/tasks/2', 'PUT', task2);
    
    console.log('Delete task 3:');
    await fetchRestEndpoint('/api/tasks/3', 'DELETE');

    console.log('Read all tasks:');
    tasks = await fetchRestEndpoint('/api/tasks', 'GET');
    console.log(tasks);
}

/**
 * Sends a HTTP request to the REST API endpoint.
 * @param {string} route 
 * @param {'GET' |'POST' |'PUT' |'DELETE'} method 
 * @param {Object} data 
 */
async function fetchRestEndpoint(route, method, data) {
    const options = { method };

    if (data) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(data);
    }

    const res = await fetch(route, options);

    if (!res.ok) {
        const error = new Error(`${method} ${res.url} ${res.status} (${res.statusText})`);
        error.response = res;
        throw error;
    }

    if (res.status !== 204) {
        return await res.json();
    } 
}