export function sortHistoryElements(historyArray) {
    let sortedHistory = []
    for (let i = 0; i < historyArray.length; i++) {
        if (sortedHistory.length === 0) {
            sortedHistory[0] = historyArray.find((e) => e.parent === undefined);
        } else {
            let parentId = sortedHistory[sortedHistory.length - 1].id
            let child = historyArray.find(e => e.parent === parentId)

            if (child !== undefined) {
                sortedHistory.push(child)
            }
        }
    }

    return sortedHistory
}

export function historyCommands(historyArray) {
    let commands = []

    for (let i = 0; i < historyArray.length; i++) {
        commands.push(cleanCommand(historyArray[i].container_config.Cmd.join(" ")))
    }

    return commands
}

export function cleanCommand(dirtyCommand) {
    let command = dirtyCommand
    let searchTerm = "#(nop)"
    let indexOfNop = dirtyCommand.indexOf(searchTerm)
    if (indexOfNop > -1) {
        command = dirtyCommand.substring(indexOfNop + searchTerm.length).trim()
    }
    return command;
}