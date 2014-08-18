/**
 * Created by d8q8 on 2014/8/15.
 * @module Lcp
 * @class LPolygon
 * @constructor
 **/
module Lcp{
    /**
     * 绘制多边形
     */
    export class LPolygon extends LGraphics{
        public CLASS_NAME:string = "LPolygon";

        constructor(vars?:IGraphics){
            super(vars);
            this.vars.corner = vars.corner ? vars.corner : 3;
        }

		public drawShape():void
		{
			this.graphics.moveTo(this.vars.width / 2, 0);
			for(var i:number = 1; i < this.vars.corner; i++)
			{
				var rad:number = 2 * Math.PI / this.vars.corner * i;
				this.graphics.lineTo(this.vars.width  / 2 * (1 + Math.sin(rad)), this.vars.height / 2 * (1 - Math.cos(rad)));
			}
		}

    }
}