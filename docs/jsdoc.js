/**
 * @description 할 일을 추가한다.
 * @constructor
 * @param {string} todo - 할 일.
 * @header Authorization: login token
 * @returns {object} id, todo, completeFlag, 
 */
const createTodo = (todo) => { }

/**
 * @description 모든 할 일을 조회한다.
 * @param {string} id - todo의 id.
 * @header Authorization: login token
 * @returns {object} id, todo, completeFlag, 
 */
const readTodo = (id) => { }

/**
 * @description id를 제외한 모든 속성을 수정한다.
 * @param {*} id
 * @param {*} todo
 * @param {*} completeFlag
 * @param {*} tag
 * @param {*} category
 * @header Authorization: login token
 * @returns {object} id, todo, completeFlag, tag, category
 */
const updateTodo = (id, todo, completeFlag, tag, category) => {
}

/**
 * @description id를 기반으로 특정할 일을 삭제한다.
 * @param {*} id 
 * @header Authorization: login token
 * @returns {object} null
 */
const deleteTodo = (id) => {};



