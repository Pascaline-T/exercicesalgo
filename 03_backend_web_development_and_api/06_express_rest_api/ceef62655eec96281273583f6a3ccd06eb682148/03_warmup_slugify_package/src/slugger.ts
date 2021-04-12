import slugify from "slugify"

function slugger(input: string) :string{
    return slugify(input, '-') 
}

function sluggerWithUnderscores(input: string) :string{
    return slugify(input, '_')
}

export { slugger };
export { sluggerWithUnderscores };
