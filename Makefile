TESTS = test/*.test.js
REPORTER = tap
TIMEOUT = 1000
MOCHA_OPTS =

install:
	@npm install --registry=http://registry.npm.taobao.org \
		--disturl=http://dist.cnpmjs.org

test: install
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
		--harmony-generators \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		--require should \
		$(MOCHA_OPTS) \
		$(TESTS)

test-cov: install
	@NODE_ENV=test node --harmony \
		node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha \
		-- -u exports \
		--reporter $(REPORTER) \
		--timeout $(TIMEOUT) \
		$(MOCHA_OPTS) \
		$(TESTS)
	@-$(MAKE) check-coverage

check-coverage:
	@./node_modules/.bin/istanbul check-coverage \
		--statements 100 \
		--functions 100 \
		--branches 100 \
		--lines 100

cov:
	@./node_modules/.bin/cov coverage

autod: install
	@./node_modules/.bin/autod -w -e example.js
	@$(MAKE) install

contributors: install
	@./node_modules/.bin/contributors -o AUTHORS -f plain

.PHONY: test
