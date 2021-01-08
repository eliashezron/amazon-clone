export const initialState={
    basket:[
        //     {
        //     id :"118941",
        //     title:"apple watch",
        //     price:11.69,
        //     rating:5,
        //     image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEBIRExAVFhATEBUPFhIVEBAVFRUYFRIWFhUSFRUYHCggGBolHRUWITEhJikrLi4uFx8zODMsNygtLisBCgoKDg0OFRAPFS4eHx8rNyw3LSw3NzI3LzcrMi0wKzMtNzU1NTctLS0uMi03Kys3NzcrNzctLTc3LzgrLDc3K//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECAwQHBgj/xABDEAACAQICBQkEBwYFBQAAAAAAAQIDEQQSBSExQVEHEyIyYXGBocEGkbHwFCNScoLC0TM0QmKSoiRTY+Hxc4OTssP/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQQDAv/EACgRAQEAAgEBBAsAAAAAAAAAAAABAhEDIRJBUfETMWFxgZGxwdHh8P/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwVsUo6tr4L1NWeKk+xdn6gSDZa60ftIje8ASH0iPHyY+kR4+TNKMS2tWhDrSSIqQVaPEvTuefnpinuL6WlYPeVE8DRoY5Pff4m5CaewC4AAAAAAAAAAAAAAAAAAAAAAAA0MTi76o7OPHuKYzE36Mdm98ew1UBVIuRRFyIo2X043MZs0YXsgKVKU3B5LJ7mzxuJoVpVJKV4tOzvrf/B0BIgdM4a1TPun8UrWKjzkdE8akjPDQ3CtJeCZuOBSxFUpYCvDqzjNcLuL8DfwukGnlmnGXB6vc9jNWFaS3m3CvGoss1dea7U9wE3h66ku0zHn6M3Tkk3eL6svR9pN0KuZdvzrKjKAAAAAAAAAAAAAAAAAYMfjIUaU61R2p04Ocn2JX1cWBkq1VFXk7L51ERjdMJ9GC1b25Qh4dJ38jhftJygYrE15zfRo3tToqVlGP81utJ737iJn7X4jZmdvvMDvf02XCn44iHoh9Nl/pf+Zv4RPnyftViX/E/wCpmvU9pcR9r/2Gh9F/Tpfbor8c36F9PETk7KpQbexZpJvuvtPmmXtFiftP3S+d5o4zTuImsrrSy8E7X9RofUVTSMqcrVaat9qE7/2tepO4OadmndON0/ccE5PNPYjFRWHqVXOSVqc5O8mkupJva1Z2fYdZ9ncdKklRramneEnsae2Le4D1pixNBTi4vY/J7mi6jVU4qUXeMldMvA8zUptNxfWi7P0ZicSteo3VlP8AhnLV4al5IyuJFYMpS28z5SmUDPTtOOV79/BrY0ZtHYh7H1ovK12/ozVoan3l8ujWjLdOOV962Pz8gJ+Erq5ca+FltXibBUAAAAAAAAAAAAAA8Tys4txwKpp/tKiv2xjrt/Vlfge2Oc8ssvqqC7an/wAwOJV5KL1+Lteye3Vv1X95fp3Byw2IqUHJSySTjUSspwklUp1EuEoyi/GxhxnWff2FmPx06qpKbT5mjHDxaVnkjKUoKXFrPlT4RitxRk0LhnXrxoueVSp15Zkk39Xh6lW1u1wt4kVKtJ679u7gb2j69SlUVWm0pqM4JtJq1SnKnLU/5ZyI+rC2oJuN/CYG+ExOKnNxVOVLD0kkvrK1R3lFu2yNKE5PtyayFra1fetvz87kbdbG1JUYUHP6mnOdWMLRSU6iipybSvJtQitd7W1WuzT+1918fh822hXruS7F5MRe/UlGp7ulbxy28Tv/ALRUVlvvPnLk+f8AiJfd9Gd5xONVes1N3pxbhGG60F9ZUmt7vqV721cWB6f2WqXoW+zNr32l6skcbK1Ob/lfnqPH6M04qU1FRUaTaTSv3J957LFQzQkltcXb0IIHE0vqtW1JNCk7xXuMkZ3jbssauSacrNNOTlvW0iszBruNT+XzKZKnGPmBnZlqSu4Jb5J+FrmnzNR717mbmDw7j0pO8rW7gJbC7fD9DaMGEjqvx9DOVAAAAAAAAAAAAAAObcsv7Oh+P8p0k5tyy9Sh+P8AKBxrSOCqRiqzhLmak5QhUs8spRfSjfc+x6yMkSVfG1Iwq0Y1JKjVlGU6aayycJJxk1sumlrRiwGjueVR51FwjmV43TW9yd+jFarys7Xu7RTkqSbbmAoRnh6kIwvXi4VY26zgrqaS32unbx3ELpGm46mmpJ2aaaa4ppmzCvKlOzzQq05W3qUWiqp1cbWbbbd1nqON7X1JKKteTy2UVa9nsSbXmTqy4ceePJb3Xr/exoaO0dOvPLHUlbNNptRu7JWWuUm9Sitb8G1dpbQdbDKLrRUY1Y1HS6Ub1Iwkoqqo3TUJPXGTXSSur6mSWn8RzMFhqUXCDTzTvfPmVpKM11rrVKa29WNodaBxWKqVp1KtWpKpVnFuU5ycpSsktbbvsSXYlsPTXljcbrKaqY5Pv3l9y9TqeBxEo4irSe21WK73LMl42OWcn/7y+5ep3P2k0MlOGIp2zuMc8XdKVkkpJrXGVklfsQRAxrucoxjrlKSSXidipxskuCS8jynsloqnJ8+4JVFbg1d772Vz1pBCY+jkqatkuku/evniWRJHS1O8L/Zkn79XqR8CKuSLkiiLkAsVKlban3ASVDqruLzHh+qvneZCoAAAAAAAAAAAAABzbll6lD8X5TpJzbll/Z0PxflA5DidE1HTde9Pm+dVO3P0ecu5KK+rzZrXe21t+w3PZyvCjiEpqOaScIuUISjGaaks0nrgtVs0XdN3IXFu021tve+r0J7B4/CSjmq0oOopObUq1SndvW4SiovnIXu1azs7M58vq649qeE849zivJhZjevvk+vgyaf0XSqVuZhJU6qvKnni1Dm1G/NucLtWU4SUcjUclRJpOMYw08bRlKjhqTnHDTqQp1aijGNWcZSjGq4RbaTkle7d30Yu0VlNfS+kHiK7nt1S12tdvNJyy7rt6luVizQ2N5t5oyhCvFTUJ1IZoNVIOEk79WSvdS3F45lMcZld3U263jxyvZxs/Nkm/nd6ZdM/R3nhhoVo4b6LHFU1XlGVRSVRxlLo6kpLctWwjNLaEq4a3Ouk+cpSnHm8Rh6upW62WTyvWu3hsNnSmNlltOvz1Z0qeHzp3jTo0klCmpWV3qXu162QcV1vuvh+h7hz9Jhjb1k+91Ph+u5P8n/7y+5ep9Fe0kb0Uk7N07XW1XW1Hzryf/vL7l6n0Zp6nmpwi72yZnZtXslZXW7X5FZ217EQy0Mrk5NKKcntk1Gzk+/aejPP+yF8lS7vri/7dnkegIMGNV6c/ut+7WRMCXxn7Of3X8CJiBci5FEi6xFVRdLY/D4lqLqmxd6AkMP1V87zIY6HVXzvMhUAAAAAAAAAAAAAA5ryy9Sh+P8AKdKOb8sq+rw/4/yAchxmEpKhKrKv/iJVMtPDxi24qMunUrSdsqtfKlrep7CEmbeL6z7zUmUSOCowUFKWbpOS6OXdFNt3+8jQ0tRScZRvaSTV7X3qzt2pm5gsQnHJJXWt6nZpqLV13rb4cCOx9W9lw7b24I4Yy9tt5MsPQzSPqEjpvRlOjlnRxUK9CrTk4yXQqwcXFSp16Ld6ck3q2qS1q5HTLIu2a32Gnt9zt8/E7sSe5P8A95fcvU+j9Lvox/6L/KfOHJ/+8S+7+p9G6YdlFf6T+MANz2Q6k++PwZ6AgPZDqT74/Bk+Qa+Pf1cvBe9oinKyvwJLSb6C7ZL1ZEYnFc2k8uZt5beD/QDy3tXUqNdeSjeyjFtLy2k17PUZ06ScpNx1XUm34q+yxj0tVpy5tVaeRyqRslK71a9a3LVxJWWHcoNqacVHYlbwsBuIrP8Ah77+RRBvpLsTfv8A+CKkaK6K7i8pFal3FSoAAAAAAAAAAAAABzzlkpXoUZbk5r35P0OhnmeUXRjr4CplV50/rklteVNSXb0W3be0gPm/GdZ/PkvgbPtLgIYerGgr87To01Xea65+V51Ix4KKnCHfBveYKtVJ92tNOz4qz7/izWrVVJuUnKUpScnKUryk3K7k29bb4veUZtBYNVsRGm72dOvLU7P6vDVai84IiG9Rv0MTzclOEpRmozjmW3pQlBrucZNPvNWahxdvSwG3LRkZYB4mDk6tHE8zXhqaUKsb0KseCzRqRd9+Uhd0n2W9/wAN/mjfo4lwjUgqklCtBU6iSVpKM41Ipq26cU+PR7TQrz3Javn/AG9wHouTyF68/u+kj6B9p5u0crWZarPY09sXw3O/YcQ5LqK53M9jkm/urbfwTXijrLrzxVa0E2l837APXeydO1ObvdOatqtsiidI/QeHcKMU1rfSa79nlYkCDT0ouhfhJP09SNls1WutauSmlJWozttcbLvewhcLXUl27GuHYB4vS9apLFRzRkmnqTT8uJ7DRlGVlKV0rdV7X2tG6pFcxFZUxhHmk5bm0l3GhXxGZ83Da9Un9lb13kvgqdrLggN0AFQAAAAAAAAAAAAAAAByX225J1Uqyr4R5YzblKjui3rbp9m/Lu3cF4etyeVk7OrBPg3lfulZn0ka2NwcaitKKbWy6T8APm+XJ3id0oP/ALlP9TFLk5xf8v8AVH0Z3mpoyjdp0YX+5EseiaH+TD+lIbHAp8nOM+yveWU+TPHSdssIr7UpxSXht8jvz0PQ/wAte+S9Si0PR+x/fP8AUbHOdB+x6wlPLzmab60tl+yK3I6b7LaJVGmo26UunN7+yPzxYw+Apwd4wSfG1372TOFevvQG2AWVqijFt/PYBp4+d2o7lrffu+e0iMTgnfNB2l5PvRvN73tetlCKi3UrR2xXfmsXKjVn1pKK4R2+8kJ04y1yV+C3LtKgW4HDKOpIlsNHVfj6GpRhsRIJW1FRUAAAAAAAAAAAAAAAAAAAABrYzDZ1ddZefYyIcmnZqzW49Aa2MwaqLhLc/RgROcZjFXpSg7SXjufcyxTIraTNqjP3kfGZnhMCZjVVr8NpHYmvmfYtn6lVJSVjDOm0BS5ixNVpWiry8itSTWxXfuRekwEW7K+22sy0o7ykKfE3cPQ3vZuX6gZMPTtre1/AzAFQAAAAAAAAAAAAAAAAAAAAAAABbOCas0muDRo1tEwfVbj5okABCT0XNbGn42fmW/Rai/gfhZ/AnQBCRjJfwy/pZmjKXB+5kqAI1Jv+B+4yQw0nuS8zeAGKlQS17XxfoZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q=="
        // },
        // {
        //     id :"118941",
        //     title:"apple watch",
        //     price:11.69,
        //     rating:5,
        //     image:"data:image/jpeg;base64,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"
        // } 
    ],
    user:null,
};
export const getBasketTotal =(basket)=>
basket?.reduce((amount, item)=>item.price+amount, 0)

const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic for adding to basket
            return {
                ...state,
            basket:[...state.basket, action.item]
            };
            
        case 'REMOVE_FROM_BASKET':
            //logic for removing from basket

            // we cloned the basket
           let newBasket = [...state.basket]

            // we find the index of the item we are looking for
            const index = state.basket.findIndex(
                 (basketItem)=> basketItem.id === action.id
                )

            if (index >= 0){
            // item exists in basket, remove it
            newBasket.splice(index, 1)

            }else{
                console.warn(
                    `cant remove product(id: ${action.id}") as it is not in basket`
                )
            }
            return {
                ...state,
                 basket: newBasket
                };
           
        default:
            return state;
    }
} 

export default reducer;