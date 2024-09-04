import React from 'react'
import chocCake from '../../assets/images/cakeRecipe.png'

const ChocolateCakeRecipe = () => {
    return (
        <div className='cake-recipe'>
            <div className="imgBox">
                <div className="img">
                    <img src={chocCake} alt="chocolate_cake_img" />
                    <div className="text">
                        <div className="time">
                            <p><span>Prep Time</span> - 25 mins</p>
                            <p><span>Bake Time</span> - 35 mins</p>
                            <p><span>Bake Time</span> - 35 mins</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna..</p>
                    </div>
                </div>
            </div>
            <div className="textBox">
                <h1>Chocolate Cake</h1>
                <h3>Ingredients:</h3>
                <p>For the Cake</p>
                <ul>
                    <li>2 1/4 cups all-purpose flour</li>
                    <li>1 1/2 cups granulated sugar</li>
                    <li>2 teaspoons baking powder</li>
                    <li>1 teaspoon salt</li>
                    <li>1/2 cup unsweetened cocoa powder</li>
                    <li>1/2 cup unsalted butter, softened</li>
                    <li>4 large eggs, at room temperature</li>
                    <li>2 teaspoons vanilla extract</li>
                    <li>1 cup whole milk, at room temperature</li>
                </ul>
                <p>For the chocolate buttercream frosting:</p>
                <ul>
                    <li>1 cup unsalted butter, softened</li>
                    <li>3 3/4 cups powdered sugar</li>
                    <li>1/2 cup unsweetened cocoa powder</li>
                    <li>2 tablespoons milk or heavy cream</li>
                    <li>1 teaspoon vanilla extract</li>
                </ul>
                <h3>Instructions:</h3>
                <p>Cake:</p>
                <ol>
                    <li>Preheat oven to 350°F (175°C). Grease two 9-inch (23cm) round cake pans.</li>
                    <li>In a medium bowl, whisk flour, sugar, baking powder, and salt.</li>
                    <li>In a large mixing bowl, combine cocoa powder and butter; beat until well combined.</li>
                    <li>Beat in eggs one at a time, followed by vanilla extract.</li>
                    <li>Gradually add dry ingredients to chocolate mixture, alternating with milk, beginning and ending with dry ingredients.</li>
                    <li>Divide batter evenly between prepared pans.</li>
                    <li>Bake 30-35 minutes or until a toothpick inserted comes out clean.</li>
                    <li>Let cool 10 minutes, then transfer to wire racks to cool completely</li>
                </ol>
                <h3>Frosting:</h3>
                <ol>
                    <li>Beat butter until creamy.</li>
                    <li>Gradually add powdered sugar, beating until smooth.</li>
                    <li>Add cocoa powder and beat until well combined.</li>
                    <li>Beat in milk and vanilla extract.</li>
                    <li>Adjust frosting consistency as needed.</li>
                </ol>
                <h3>Assembly:</h3>
                <ol>
                    <li>Place one cake layer on a serving plate.</li>
                    <li>Spread frosting on top.</li>
                    <li>Place second cake layer on top.</li>
                    <li>Frost entire cake.</li>
                </ol>
                <h3>Tips:</h3>
                <ul>
                    <li>Use high-quality cocoa powder for intense chocolate flavor.</li>
                    <li>Don't overmix batter or frosting.</li>
                    <li>If desired, add nuts, chocolate chips, or espresso powder for extra flavor.</li>
                </ul>
                <p>Enjoy your delicious homemade chocolate cake!</p>
            </div>
        </div>
    )
}

export default ChocolateCakeRecipe
