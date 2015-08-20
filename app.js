function doSomething(){
	console.error('Whatever')
	// console.error(this);
}
doSomething();

function User(){
	this.name = "";
	this.life = 100;
	this.giveLife = function giveLife(targetPlayer){
		targetPlayer.life += 1;
		console.log(this.name , 'gave 1 life to', targetPlayer.name);
		this.life -= 1;
	}
}

User.prototype.uppercut = function uppercut(targetPlayer){
	targetPlayer.life-=3;
	console.log(this.name , 'cuts' , targetPlayer.name, 'and takes 3 points of life');
}

var Bucky = new User();
var Wendy = new User();

Bucky.name = 'Bucky';
Wendy.name = 'Wendy';

User.prototype.magic = 60;

Bucky.giveLife(Wendy);
console.log('Wendy life: ', Wendy.life, 'Bucky life', Bucky.life);
Wendy.uppercut(Bucky);

console.log('Wendy life: ', Wendy.life, 'Bucky life', Bucky.life);
console.log(Bucky.magic)
console.log(Wendy.magic)
