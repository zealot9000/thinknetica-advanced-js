class CustomPromise {
    constructor(callback) {
        setTimeout(() => {
            callback(this.__resolve.bind(this), this.__reject.bind(this))
        }, 0);

        this.__callback = callback;
        this.__success__ = [];
        this.__state__ = 'pending';
        this.__error__ = [];
        this.__result__ = null;
    }

    then(successCb, rejectCb) {
        const newPromise = new CustomPromise((resolve, reject) => {
            const runHandler = (value) => {
                try {
                    if (successCb) {
                        resolve(successCb(value));
                    }

                    if (rejectCb) {
                        reject(rejectCb(value));
                    }

                } catch (error) {
                    reject(error);
                }
            };


            if (this.__state__ == 'fulfilled' || this.__state__ == 'rejected') {
                runHandler(this.__result__);
            }

            if (successCb) {
                this.__success__.push(runHandler);
            }

            if (rejectCb) {
                this.__error__.push(runHandler);
            }
        });

        return newPromise;
    }

    catch(rejectCb) {
        return this.then(null, rejectCb);
    }

    static resolve(value) {
        return new CustomPromise((resolve, reject) => {
            resolve(value)
        });
    }

    static reject(value) {
        return new CustomPromise((resolve, reject) => {
            reject(value)
        });
    }

    __resolve(result) {
        this.__result__ = result;
        this.__success__.forEach(cb => cb(result));
        this.__state__ = 'fulfilled';
    }

    __reject(err) {
        this.__result__ = err;
        this.__error__.forEach(cb => cb(err));
        this.__state__ = 'rejected';
    }
}
