OK so Im gonna use this as a notes sort of section.

Im all tied up in knots over my Views/partials. And I cant get my each to work? I'll come back to it.

I want to have the skateboard logo inline with the main title

I want to list the spots below the map to start with. Just the name, and then the name is a link to a spot page :D
> use a params.id to load the right spot. to the spots page

router.get ('/skateApp/spot/:id', (req, res) => {
const rightSpot = data.spots.find(spot => {
return spot.id === Number(req.params.id)
})
res.render('spot', rightSpot)
})

router.post ('')
