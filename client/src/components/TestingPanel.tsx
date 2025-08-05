import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, CheckCircle, XCircle, Loader2, Eye, Zap, Navigation, Shield } from 'lucide-react';
import { runAllTests, TestResult } from '../utils/testing';

interface TestingPanelProps {
  isVisible: boolean;
  onToggle: () => void;
}

export default function TestingPanel({ isVisible, onToggle }: TestingPanelProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<any>(null);

  const runTests = async () => {
    setIsRunning(true);
    try {
      const testResults = await runAllTests();
      setResults(testResults);
    } catch (error) {
      console.error('Testing failed:', error);
    } finally {
      setIsRunning(false);
    }
  };

  const getTestIcon = (passed: boolean) => {
    return passed ? (
      <CheckCircle className="w-4 h-4 text-green-500" />
    ) : (
      <XCircle className="w-4 h-4 text-red-500" />
    );
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-500';
    if (score >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={onToggle}
        className="fixed bottom-6 left-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Eye className="w-5 h-5" />
      </motion.button>

      {/* Testing Panel */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -400 }}
            className="fixed left-0 top-0 h-full w-96 bg-gray-900 text-white z-40 shadow-2xl overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Testing Panel</h2>
                <button
                  onClick={onToggle}
                  className="text-gray-400 hover:text-white"
                >
                  ×
                </button>
              </div>

              {/* Run Tests Button */}
              <button
                onClick={runTests}
                disabled={isRunning}
                className="w-full mb-6 p-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                {isRunning ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
                <span>{isRunning ? 'Running Tests...' : 'Run All Tests'}</span>
              </button>

              {/* Results */}
              {results && (
                <div className="space-y-6">
                  {/* Summary */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3">Summary</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className={`text-2xl font-bold ${getScoreColor(results.summary.score)}`}>
                          {results.summary.score.toFixed(1)}%
                        </div>
                        <div className="text-sm text-gray-400">Score</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">
                          {results.summary.passed}/{results.summary.total}
                        </div>
                        <div className="text-sm text-gray-400">Passed</div>
                      </div>
                    </div>
                  </div>

                  {/* Form Tests */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      Form Tests
                    </h3>
                    <div className="space-y-2">
                      {results.formTests.map((test: TestResult, index: number) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          {getTestIcon(test.passed)}
                          <span className={test.passed ? 'text-green-400' : 'text-red-400'}>
                            {test.message}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Accessibility Tests */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Eye className="w-5 h-5 mr-2" />
                      Accessibility Tests
                    </h3>
                    <div className="space-y-2">
                      {results.accessibilityTests.map((test: TestResult, index: number) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          {getTestIcon(test.passed)}
                          <span className={test.passed ? 'text-green-400' : 'text-red-400'}>
                            {test.message}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Responsive Tests */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Navigation className="w-5 h-5 mr-2" />
                      Responsive Tests
                    </h3>
                    <div className="space-y-2">
                      {results.responsiveTests.map((test: TestResult, index: number) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          {getTestIcon(test.passed)}
                          <span className={test.passed ? 'text-green-400' : 'text-red-400'}>
                            {test.message}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance Tests */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      Performance Tests
                    </h3>
                    <div className="space-y-2">
                      {results.performanceTests.map((test: TestResult, index: number) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          {getTestIcon(test.passed)}
                          <span className={test.passed ? 'text-green-400' : 'text-red-400'}>
                            {test.message}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Tests */}
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Navigation className="w-5 h-5 mr-2" />
                      Navigation Tests
                    </h3>
                    <div className="space-y-2">
                      {results.navigationTests.map((test: TestResult, index: number) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          {getTestIcon(test.passed)}
                          <span className={test.passed ? 'text-green-400' : 'text-red-400'}>
                            {test.message}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 