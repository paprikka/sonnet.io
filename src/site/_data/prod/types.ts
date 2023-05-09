export type RemainingProject = {
    title: string
    date: string
    content: string
    demoURL: string
    links: { url: string; type: 'source' }[]
}

export type Project = {
    title: string
    date: string | [string, string]
    content: string
    demoURL: string
    isFavourite: boolean
}
