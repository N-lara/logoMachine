const {Triangle, Circle, Rectangle} = require('./shapes');


describe('shapes', ()=>{
    describe('triangle',()=>{
        it('should change color when you set', ()=>{
            const shape = new Triangle;
            shape.setColor="blue";
            shape.render();
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
        
    })
    describe('rectangle',()=>{
        it('should change color when you set', ()=>{
            const shape = new Rectangle;
            shape.setColor="blue";
            shape.render();
            expect(shape.render()).toEqual('<rect x="60" y="10" rx="10" ry="10" width="160" height="160" fill="blue"/>');
        })
        
    })
    describe('circle',()=>{
        it('should change color when you set', ()=>{
            const shape = new Circle;
            shape.setColor="blue";
            shape.render();
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        })
        
    })
})