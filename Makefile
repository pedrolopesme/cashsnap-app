# Makefile for React Native projects based on Expo

# Default target
help:
	@echo ""
	@echo "_______ _______ _______ _     _ _______ __   _ _______  _____ "
	@echo "|       |_____| |______ |_____| |______ | \  | |_____| |_____|"
	@echo "|_____  |     | ______| |     | ______| |  \_| |     | |      "
	@echo "	"
	@echo "	"
	@echo "Usage: make [target]"
	@echo ""
	@echo "Targets:"
	@echo "  help:          Display this help message"
	@echo "  run:           Start the development server"
	@echo "	"

# Development server
run:
	npm start
