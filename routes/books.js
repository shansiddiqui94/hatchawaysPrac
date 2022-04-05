const books = [
    {
        "title":"Eloquent JavaScript, Third Edition",
        "author":"Marijn Haverbeke",
    },
    {
        "title":"Practical Modern JavaScript",
        "author":"Nicolás Bevacqua",
    },
    {
        "title":"Understanding ECMAScript 6",
        "author":"Nicholas C. Zakas",
    },
    {
        "title":"Speaking JavaScript",
        "author":"Axel Rauschmayer",
    },
    {
        "title":"Learning JavaScript Design Patterns",
        "author":"Addy Osmani",
    },
    {
        "title":"You Don't Know JS Yet",
        "author":"Kyle Simpson",
    },
    {
        "title":"Pro Git",
        "author":"Scott Chacon and Ben Straub",
    },
    {
        "title":"Rethinking Productivity in Software Engineering",
        "author":"Caitlin Sadowski, Thomas Zimmermann",
    }
]


router.get('/', (_, res)=> {
    res.send('Express App is LIVE!!')
})

router.get('/books', (_, res)=> {
    res.json({ok: true, books})
})

router.get('/books/:title', (req, res)=>{
    const {title} = req.params;
    const book = books.filter((book) => book.title === title)[0];
    res.json({ok: true, book})
})


router.post('/addbooks', (req, res) =>{
    const {title, author} = req.body;
    if(title && author){
        books.push({title, author})
        res.json({ok: true, books})
    }
})
