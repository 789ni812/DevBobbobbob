describe('Array of Objects containing Articles', () => {
    const state = [
        { 
        title: 'Mocked article array', 
        description: 'This is the description field from the mocked article array.' ,
        createdDate: '08112020',
        author: 'Devbob',
      tags: ['developer','tutorial','react'],
      publishStatus: 'draft'
    },
    { 
        title: '2nd Mocked article array', 
        description: 'This is the second mocked article object description' ,
        createdDate: '09112020',
        author: 'spud balls',
      tags: ['developer','quiz','JavaScript'],
      publishStatus: 'published'
    },
    { 
        title: 'Three is the number of this article magic or not', 
        description: 'third mocked article object description, I mean we really are on fire here .' ,
        createdDate: '10112020',
        author: 'mcdivers',
      tags: ['design','graphic design','gimp'],
      publishStatus: 'draft'
    }
      ];
it('renders an Article object description property',()=>{
    expect(state).toEqual(          
        expect.arrayContaining([      // Contains an array, 
          expect.objectContaining({   // and contains an object
            description: 'third mocked article object description, I mean we really are on fire here .' // and that object also contains these properties.
          })
        ])
      )
});

it('renders Article object publishedStatus property', () => {
    expect(state).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                publishStatus: 'draft'
            })
        ])
        )
})
    
    
})
