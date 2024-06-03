let counter = (index, action) => {
    while (index < 10) {
        action(index++);
    }
}

counter(1, console.log);