export const prompts ={
    summarize:(text:string,max:number)=> `
    Summarize the following text under ${max} words.
    Return only summary.

    Text:
    ${text}
    `,

    rewrite:(text:string,tone:'professional' | 'simple')=>`
    Rewrite the following text in a ${tone} tone.
    Do not add any information.

    Text:
    ${text}
    `,

    fixGrammar:(text:string)=>`
    Correct Grammatical errors in the text below.
    Return only the corrected version.

    Text:
    ${text}
    `,

    generateTags:(text:string)=>`
    Generate 3 to 6 relevant tags for the content below.
    Return tags as a JSON array of string.
    
    Text:
    ${text}
    `
}