/**
 *  TypeScript standard library (C++ design)
 * 
 *  Author : PeaceShi
 */

/**
 * base Queue implement used Array.
 *
 * design by https://en.cppreference.com/w/cpp/container/queue
 */
export class Queue<T>{
	protected element: T[] = null;
	public constructor() {
		this.element = new Array<T>();
	}
	/**
	 * access the first element
	 */
	public front = () => this.element[0];
	/**
	 * access the last element
	 */
	public back = () => this.element[this.element.length - 1];
	/**
	 * checks whether the underlying container is empty
	 */
	public empty = () => this.element.length == 0;
	/**
	 * returns the number of element
	 */
	public size = () => this.element.length;
	/**
	 * inserts element at the end
	 */
	public push = (element: T) => this.element.push(element);
	/**
	 * removes the first element
	 * 
	 * make sure it is FIFO
	 */
	public pop = () => this.element.shift();
	/**
	 * constructs element in-place at the end
	 */
	public emplace = (Queue: Queue<T>, ...values: any[]) => values.forEach((element) => Queue.push(element));
	/**
	 * delete all elements
	 */
	public clean = () => { this.element = [] };
	/**
	 * swaps the contents
	 */
	//public swap = (source: Queue<T>, dist: Queue<T>) => {};
}