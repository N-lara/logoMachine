const {Triangle, Circle, Rectangle} = require('../lib/shapes');


describe('shapes', ()=>{
    describe('triangle',()=>{
        it('should change color when you set', ()=>{
            const shape = new Triangle;
            shape.setColor="blue";
            shape.render();
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
        it('should change text when you set it', ()=>{
            const shape = new Triangle;
            shape.text="example";
            shape.textColor="red"
            shape.renderText();
            expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">example</text>');
        });
        
    })
    describe('rectangle',()=>{
        it('should change color when you set', ()=>{
            const shape = new Rectangle;
            shape.setColor="blue";
            shape.render();
            expect(shape.render()).toEqual('<rect x="60" y="10" rx="10" ry="10" width="160" height="160" fill="blue"/>');
        });
        it('should change text when you set it', ()=>{
            const shape = new Rectangle;
            shape.text="example";
            shape.textColor="red"
            shape.renderText();
            expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">example</text>');
        });
        
    })
    describe('circle',()=>{
        it('should change color when you set', ()=>{
            const shape = new Circle;
            shape.setColor="blue";
            shape.render();
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
        });
        it('should change text when you set it', ()=>{
            const shape = new Circle;
            shape.text="example";
            shape.textColor="red"
            shape.renderText();
            expect(shape.renderText()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">example</text>');
        });
        
    })
})