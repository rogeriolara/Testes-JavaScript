const orange = {
	price: 2,
};

const apple = {
	price:3,
};

function mapArray( ) {
	const array = [ 1 ,  2 ];

	 return array.map(function (item) {
		 return item * this.price;
	}, apple );
}

console.log(mapArray( ));